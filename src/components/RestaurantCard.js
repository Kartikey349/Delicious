import { useParams } from "react-router";
import { CDN_URL } from "../utils/contant";

export const RestaurantCard = (props) => {

    const {resData} = props;

    //console.log(resData);

    const {
        name,
        cuisines,
        cloudinaryImageId,
        deliveryTime,
        costForTwo,
        avgRating
    } = resData.info;
    
    return (
        <div className="m-4 p-4 w-[250px] h-[400px] shadow-md rounded-md transform transition duration-300 hover:scale-95">
            <img className="res-logo w-[100%] h-[180px] rounded-md" src={ CDN_URL + cloudinaryImageId} />

            <h3 className="font-bold my-2 leading-5">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
            <button className="bg-green-600 text-white p-1 rounded-sm mt-1 flex items-center gap-1 text-[10px]">
                <i className="fa-solid fa-star text-white"></i>{avgRating}
            </button>
        </div>
    )
};

//higher order component
export const promotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-2 rounded-md z-10">promotted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
