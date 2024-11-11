import { PiHeartStraightThin, PiShoppingCartThin } from "react-icons/pi";
import { Link, NavLink, useLocation } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Provider/CartContext";
const Navbar = () => {
    const [nowLocation, setNowLocation] = useState('/')
    const location = useLocation()
    useEffect(() => {
        setNowLocation(location.pathname)
    }, [location.pathname])
    const { cartItems, wishlistItems } = useContext(CartContext)
    // nav bar category 
    return (
        <div className={`${nowLocation === '/' ? '' : 'bg-white'} sticky top-0 z-30`}>
            {/* <div className="mt-5"> */}
            < div className={`${nowLocation === '/' ? ' bgPink text-white rounded-t-2xl' : 'bg-white'} py-5 px-2 navbar bg-base-100 max-w-[1440px] mx-auto`} >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-3 space-y-2 shadow">
                            <NavLink className={({ isActive }) => isActive ? `${nowLocation === '/' ? 'text-black' : 'bg-white border-b !border-black'} active border-b !border-black` : "text-black"} to={'/'}>Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? `${nowLocation === '/' ? '' : 'bg-white border-b !border-black'} active` : "text-black"} to={'/statistics'}>Statistics</NavLink>
                            <NavLink className={({ isActive }) => isActive ? `${nowLocation === '/' ? '' : 'bg-white border-b !border-black'} active` : "text-black"} to={'/dashboard'}>Dashboard</NavLink>
                            <NavLink className={({ isActive }) => isActive ? `${nowLocation === '/' ? '' : 'bg-white border-b !border-black'} active` : "text-black"} to={'/complain-form'}>Complain Form</NavLink>
                        </ul>
                    </div>
                    <a href="/" className="font-bold md:text-xl">Gadget Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-10">
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? `${nowLocation === '/' ? '' : 'bg-white border-b !border-black'} active` : ""} to={'/statistics'}>Statistics</NavLink>
                        <NavLink className={({ isActive }) => isActive ? `${nowLocation === '/' ? '' : 'bg-white border-b !border-black'} active` : ""} to={'/dashboard'}>Dashboard</NavLink>
                        <NavLink className={({ isActive }) => isActive ? `${nowLocation === '/' ? '' : 'bg-white border-b !border-black'} active` : ""} to={'/complain-form'}>Complain Form</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-4">
                        <Link
                            to={'/dashboard/cart-section'}
                            className="relative w-10 h-10 p-2 px-2 bg-white border rounded-full  text-black ">
                            <PiShoppingCartThin className="w-full h-full z-20"></PiShoppingCartThin>
                            <div className={`absolute -top-3 -right-1 ${nowLocation === '/' ? 'bg-white pink border' : 'border'} rounded-full`}>
                                <span className=" font-semibold p-1">{cartItems.length}</span>
                            </div>
                        </Link>
                        <Link
                            to={'/dashboard/wishlist-section'}
                            className="relative w-10 h-10 p-2 px-2 bg-white border rounded-full  text-black ">
                            <PiHeartStraightThin className="w-full h-full"></PiHeartStraightThin>
                            <div className={`absolute -top-3 -right-1 ${nowLocation === '/' ? 'bg-white  pink border' : 'border'} rounded-full`}>
                                <span className=" font-semibold p-1">{wishlistItems.length}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default Navbar;