import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {


    const [showIndex, setShowIndex] = useState(null);

    const {resId} = useParams();
    const resInfo =  useRestaurantMenu(resId);


    if(resInfo === null) return <Shimmer />

    const {name,
        cuisines,
        costForTwo,
        cloudinaryImageId,
        avgRating
    } = resInfo?.cards[2]?.card?.card?.info;


    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    //console.log(resInfo)

   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    //console.log(categories)

    return(
        <div className="">
            <div className="bg-gray-900 p-4 flex w-8/12 m-auto rounded-md">
                <img className="w-4/12 rounded-sm" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />

                <div className="text-left m-2">
                    <h1 className="text-3xl  mt-2 text-white ">{name}</h1>

                    <h2 className="my-2 text-white">{cuisines.join(", ")}: Rs {costForTwo / 100}</h2>

                    <button className="bg-green-600 text-white p-1 rounded-sm mt-1 flex items-center gap-1 text-[10px]">
                        <i className="fa-solid fa-star text-white"></i>{avgRating}
                    </button>

                </div>
            </div>
            
            {categories.map((category, index) => {
                return <RestaurantCategory key={category.card.card.categoryId} data={category.card.card} 

                showItem = {index === showIndex ? true : false}

                setShowIndex = {() => {
                    setShowIndex(index === showIndex ? null : index);
                }}
                />
            })}
        </div>
    )
}

export default RestaurantMenu;