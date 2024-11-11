import PropTypes from "prop-types";
import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CartContext } from "../../Provider/CartContext";
import Swal from "sweetalert2";
const SingleCartItems = ({ items }) => {
    const { product_id, product_title, product_image, price, specification } = items;
    const { deleteCartlistInCart } = useContext(CartContext);

    const handleDeleteToCartItems = (id) => {
        deleteCartlistInCart(id)
        Swal.fire({
            title: "Deleted!",
            text: "Your cart deleted to Cart Section!",
            icon: "success"
        });
    }
    return (
        <div className={`${items ? 'md:flex' : 'hidden'} p-5 shadow-lg mb-4 border rounded-xl md:gap-20`}>
            <div className="md:w-[400px] w-[300px] md:h-[200px] h-[150px] shadow-md rounded-xl md:mb-0 mb-5">
                <img className="w-full h-full object-contain" src={product_image} alt={product_title} />
            </div>
            <div className="flex justify-between w-full md:pr-10">
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p>{specification}</p>
                    <p className="font-bold">Price : {price} $</p>
                </div>
                <div className="">
                    <button onClick={() => handleDeleteToCartItems(product_id)} className="">
                        <TiDeleteOutline className="w-16 h-16 p-2 text-red-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

SingleCartItems.propTypes = {
    items: PropTypes.object.isRequired,
}
export default SingleCartItems;