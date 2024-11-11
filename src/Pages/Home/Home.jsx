import { Outlet, } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { Helmet } from 'react-helmet-async';
const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home | Gadget-shop</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-[1440px] mx-auto">
                <Outlet></Outlet>
                {/* <Products categoriesData={categoriesData}></Products> */}
            </div>

        </div>
    );
};

export default Home;