import { NavLink } from 'react-router-dom';
import bgImage from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className=''>
            <div className="bgPink md:py-10 py-5 md:pb-[320px] pb-[200px] relative -top-1 rounded-b-2xl">
                <div className="md:w-3/4 mx-auto space-y-6 text-center text-white">
                    <h1 className="md:text-6xl text-3xl font-semibold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="w-4/5 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <NavLink to="/dashboard"> <button className="pinkOutletBtn mt-5">Shop Now</button></NavLink>
                </div>
            </div>
            <div className='md:w-[1062px] md:h-[563px] w-5/6 mx-auto md:p-4 p-2 rounded-3xl bg-white/20 border-2 border-white relative md:-top-[280px] -top-[150px]'>
                <img className='w-full h-full object-cover rounded-2xl' src={bgImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;