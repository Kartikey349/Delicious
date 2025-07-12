import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice";

export const ItemList = ({items}) => {
    //console.log(items)

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItems(item))
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-400 text-left">
                    <div>
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span> - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </div>

                    <p className="text-xs text-gray-600">{item.card.info.description}</p>

                    <button className="bg-black text-white p-1 rounded-md text-xs" onClick={() => handleAddItem(item)}>Add+</button>
                </div>
            ))}
        </div>
    )
}