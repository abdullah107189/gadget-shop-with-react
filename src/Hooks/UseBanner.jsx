import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const UseBanner = ({ title, pb = false, btn = true }) => {
    return (
        <div className="text-center bgPink relative">
            <div className={`max-w-[1440px] mx-auto md:p-10 p-5 ${(pb === true) ? 'md:pb-[150px] pb-[100px]' : ''} text-white`}>
                <h1 className="md:text-4xl text-2xl md:mb-6 mb-3 font-bold text-white">{title}</h1>
                <p className="md:w-2/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className={`${btn === true ? 'flex' : 'hidden'} mt-3 gap-4 items-center justify-center`}>
                    <NavLink to={'/dashboard/cart-section'} className={({ isActive }) => isActive ? 'pinkOutletBtn' : 'pinkOutletBtn !border !border-white !bg-transparent !text-white'}>Cart</NavLink>
                    <NavLink to={'/dashboard/wishlist-section'} className={({ isActive }) => isActive ? 'pinkOutletBtn' : 'pinkOutletBtn !border !border-white !bg-transparent !text-white'}>Wishlist</NavLink>
                </div>
            </div>
        </div >
    );
};
UseBanner.propTypes = {
    title: PropTypes.string,
    pb: PropTypes.bool,
    btn: PropTypes.bool,
}
export default UseBanner;