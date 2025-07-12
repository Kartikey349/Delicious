import { useDispatch, useSelector } from "react-redux"
import { ItemList } from "./ItemList"
import { clearCart} from "../utils/cartSlice";


export const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart())  
    } 

    return(
        <div className="text-center m-4 p-4">
            <h1>Cart</h1>
             <button className="p-2 m-2 bg-black text-white rounded-md"
            onClick={handleClick}
            >
                Clear Cart
            </button>

            <div className="">
                {cartItems.length === 0 ? <h1>Your cart is Empty</h1> : 
                    <ItemList items={cartItems} />
                }
            </div>
        </div>
    )
}