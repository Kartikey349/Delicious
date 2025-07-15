import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const Nav = () => {

    const isOpenNav = useSelector((store) => store.nav.isOpenNav);

    if(!isOpenNav) return null;

    return(
        <div>
            <ul className="flex flex-col absolute right-0 top-[80px] z-10 bg-pink-100 rounded-md w-3/12 items-center gap-4 py-4 sm:hidden ">
                <Link to="/">
                    <li className="">Home</li>
                </Link>

                <Link to="/about">
                    <li className="">About</li>
                </Link>
                
                <Link to="/contact">
                    <li className="">Contact</li>
                </Link>

                <Link to="/grocery">
                    <li className=" ">Grocery</li>
                </Link>
            </ul>
        </div>
    )
}