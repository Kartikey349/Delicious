import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({data, showItem, setShowIndex}) => {
    //console.log(data)

    function handleClick() {
        setShowIndex();
    }

    return <div className="flex justify-center ">
        <div className="w-8/12 bg-gray-50 my-4 px-4 shadow-md ">
            <div className="flex items-center justify-between cursor-pointer" onClick={handleClick}>
                 <span className="p-4 font-semibold">{data.title} ({data.itemCards.length})</span>
                <span><i className="fa-solid fa-arrow-down"></i></span>
            </div>
           {showItem && <ItemList items={data.itemCards}/>}
        </div>
    </div>
}