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
        costForTwo
    } = resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    // console.log(resInfo)

   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    //console.log(categories)

    return(
        <div className="text-center">
            <h1 className="text-3xl font-bold mt-10">{name}</h1>
            <h2 className="my-6 font-semibold">{cuisines.join(", ")}: Rs {costForTwo / 100}</h2>
            
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