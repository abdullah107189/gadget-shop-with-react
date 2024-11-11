import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleProductCard = ({ items }) => {
    const { product_id, product_title, price, product_image, } = items;


    return (
        <div className="p-2 border rounded-2xl flex flex-col shadow-md hover:shadow-xl">
            <div className="w-full p-4 h-[300px] mb-3 mx-auto ">
                <img className="w-full h-full object-contain" src={product_image} alt="" />
            </div>
            <div className="space-y-3 flex flex-col items-start ml-0 p-4 flex-grow">

                <h1 className="text-xl font-bold">{product_title}</h1>
                <p className="text-gray-500">Price : {price} $</p>
            </div>
            <div className="pb-4 pl-4">
                <Link to={`/productDetails/${product_id}`} className="pinkOutletBtn">View Details</Link>
            </div>
        </div>
    );
};
SingleProductCard.propTypes = {
    items: PropTypes.object.isRequired,
}
export default SingleProductCard;