import { useContext } from "react";
import { CartContext } from "../../Provider/CartContext";
import SingleCartItems from "../SingleCartItems/SingleCartItems";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CartSection = () => {
    const { cartItems } = useContext(CartContext)
    const length = cartItems.length

    return (
        <div className="md:my-5 md:mb-10">
            <Helmet>
                <title>Dashboard | CartItems | Gadget-shop</title>
            </Helmet>
            {cartItems.map(items => <SingleCartItems key={items.product_id} items={items} length={length}></SingleCartItems>)}
            <div className={`${length === 0 ? 'flex' : 'hidden'} flex items-center flex-col justify-center py-10 space-y-4`}>
                <h1 className="text-4xl font-bold text-center ">There is no data</h1>
                <p>Please add to cart product..</p>
                <Link to={'/#allProducts'} className="pinkOutletBtn">Show Products</Link>
            </div>
        </div >
    );
};

export default CartSection;