import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/contant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const {loggedInUser} = useContext(UserContext);

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
                <ul className="flex p-4 items-center">
                    <Link to="/">
                        <li className="px-2 hidden sm:block">Home</li>
                    </Link>
                    
                    <Link to="/about">
                        <li className="px-2 hidden sm:block">About</li>
                    </Link>
                    
                    <Link to="/contact">
                        <li className="px-2 hidden sm:block">Contact</li>
                    </Link>

                    <Link to="/grocery">
                        <li className="px-2 hidden sm:block">Grocery</li>
                    </Link>
                    
                    <Link to="/cart">
                        <li className="px-4 md:px-2">
                            <i className="fa-solid fa-cart-shopping"></i> ({cartItems.length})
                        </li>
                    </Link>

                    <button className=" border bg-green-600 text-white rounded-sm px-2 py-1" onClick={() => {
                        loginBtn === "Login" ? 
                        setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button>

                    {/* <li className="p-2">{loggedInUser}</li> */}

                    <li className="text-[8px] pl-1">
                        {onlineStatus ? "🟢" : "🔴"}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;