import { RestaurantCard } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { promotedLabel } from "./RestaurantCard";
import UserContext from "../utils/userContext";

const filteredList = (filteredListOfRes, searchText) => {
    let filteredList = filteredListOfRes.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return filteredList;
}

const Body = () => {

    const {setUserName, loggedInUser} = useContext(UserContext)

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);

    //higher order component used
    const RestaurantCardPromoted = promotedLabel(RestaurantCard);


    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=23.259933&lng=77.412613&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json()

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


        setFilteredListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>looks like you offline</h1>
        )
    }

    
    return listOfRestaurant.length === 0 ? <Shimmer/> : (<div className="body flex flex-wrap justify-center flex-col">
        <div className="flex mt-10 items-center justify-center flex-col gap-2 md:flex-row">

            <div className="flex items-center">
            <input type="text" className="border border-solid border-black sm-rounded h-10 rounded-sm p-2" placeholder="search..." value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }}/>
            <button className="bg-green-600 p-2 rounded-sm text-white ml-1 hover:bg-yellow-900 transition duration-300 ease-in-out" onClick={() => {
                const data = filteredList(filteredListOfRes, searchText);
                setListOfRestaurant(data);
            }} >Search</button>
            </div>


            <div className="filter mx-10">
                <button className="filter-btn border border-gray-600 h-10 p-2 rounded-sm" onClick={()=> {
                    const filtered = listOfRestaurant.filter((res)=> res.info.avgRating > 4);
                    setListOfRestaurant(filtered);
                }}>Top rated restaurant</button>
            </div>

            {/* <div>
                <input className="border border-black p-4" type="text" value={loggedInUser} onChange={(e) => {
                    setUserName(e.target.value)
                }} />
            </div> */}
        </div>


  <div className="res-container flex flex-wrap justify-center">
           {
            listOfRestaurant.map((restaurant)=> {
                 return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 
                 {
                    restaurant.info.avgRating >= 4.4 ? <RestaurantCardPromoted resData = {restaurant} /> : 
                    <RestaurantCard resData = {restaurant}/> 
                 }
                 </Link>
            })
           }
        </div>
    </div>)
}


export default Body;