import { useContext } from "react";
import { CartContext } from "../../Provider/CartContext";
import SingleWishListCard from "../SingleWishListCard/SingleWishListCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WishlistSection = () => {
    const { wishlistItems } = useContext(CartContext)

    return (
        <div className="md:mt-5">
            <Helmet>
                <title>Dashboard | Wishlist | Gadget-shop</title>
            </Helmet>
            {
                wishlistItems.map(items => <SingleWishListCard key={items.product_id} items={items}></SingleWishListCard>)
            }
            <div className={`${length === 0 ? 'flex' : 'hidden'} flex items-center flex-col justify-center py-10 space-y-4`}>
                <h1 className="text-4xl font-bold text-center ">There is no data</h1>
                <p>If you add wishlist . Click to Show Product button and add to wishlist product..</p>
                <Link to={'/#allProducts'} className="pinkOutletBtn">Show Products</Link>
            </div>
        </div >
    );
};

export default WishlistSection;