import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/contant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../utils/navSlice";

const Header = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleNav());
    }

    //const {loggedInUser} = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    const [loginBtn, setLoginBtn ] = useState("Login")

    //subscribing to a store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between items-center shadow-lg h-[80px] sticky top-0 z-10 bg-white">
            <div className="logo-container">
                <Link to="/">
                    <img className="h-16" src= {LOGO_URL }/>
                </Link>
            </div>

            <div className="nav-items">
                <ul className="flex p-4 items-center gap-2">
                    <Link to="/">
                        <li className="hidden sm:block">Home</li>
                    </Link>
                    
                    <Link to="/about">
                        <li className="hidden sm:block">About</li>
                    </Link>
                    
                    <Link to="/contact">
                        <li className="hidden sm:block">Contact</li>
                    </Link>

                    <Link to="/grocery">
                        <li className=" hidden sm:block">Grocery</li>
                    </Link>
                    
                    <Link to="/cart">
                        <li className=" md:px-2">
                            <i className="fa-solid fa-cart-shopping"></i> ({cartItems.length})
                        </li>
                    </Link>

                     <i className="fa-solid fa-bars text-2xl cursor-pointer sm:hidden" onClick={() => toggleMenuHandler()}></i>

                    <button className=" border bg-green-600 text-white rounded-sm px-2 py-1" onClick={() => {
                        loginBtn === "Login" ? 
                        setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button>

                    {/* <li className="p-2">{loggedInUser}</li> */}

                    <li className="text-[8px]">
                        {onlineStatus ? "🟢" : "🔴"}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;