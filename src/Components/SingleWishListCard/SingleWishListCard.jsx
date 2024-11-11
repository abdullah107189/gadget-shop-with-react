import PropTypes from "prop-types";
import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CartContext } from "../../Provider/CartContext";
import Swal from "sweetalert2";
const SingleWishListCard = ({ items }) => {
    const { product_title, product_image, price, description, } = items;

    const { cartItems, addToCart, deleteWishlistCart } = useContext(CartContext);
    const handleAddToCart = (product) => {
        const checkCart = cartItems.includes(product)
        if (checkCart === true) {
            return Swal.fire({
                title: "Already added !",
                text: "Already added this product to Cart section!",
                icon: "warning"
            });
        }
        addToCart(product)
        Swal.fire({
            title: "Good job!",
            text: "Your cart added Cart Section!",
            icon: "success"
        });

        deleteWishlistCart(product.product_id)

    }
    const handleToDeleteWishList = (id) => {
        deleteWishlistCart(id)
        Swal.fire({
            title: "Delete!",
            text: "Your wishlist card is deleted !",
            icon: "success"
        });
    }
    return (
        <div className="p-5 shadow-lg mb-4 border rounded-xl md:flex gap-20">
            <div className="md:w-[400px] w-[300px] md:h-[200px] h-[150px] shadow-md rounded-xl md:mb-0 mb-5">
                <img className="w-full h-full object-contain" src={product_image} alt={product_title} />
            </div>
            <div className="flex justify-between w-full md:pr-10">
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p>{description}</p>
                    <p className="font-bold">Price : {price} $</p>
                    <button
                        onClick={() => handleAddToCart(items)}
                        className="pinkOutletBtn">Add To Card</button>
                </div>
                <div className="">
                    <button
                        onClick={() => handleToDeleteWishList(items.product_id)}
                        className="">
                        <TiDeleteOutline className="w-16 h-16 p-2 text-red-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

SingleWishListCard.propTypes = {
    items: PropTypes.object.isRequired,
}
export default SingleWishListCard;