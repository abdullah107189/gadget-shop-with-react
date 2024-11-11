import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import UseBanner from "../../Hooks/useBanner";
import { PiHeartStraightThin, PiShoppingCartThin } from "react-icons/pi";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext, useState, } from "react";
import { CartContext } from "../../Provider/CartContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ProductsDetails = () => {
    const { id } = useParams()
    const datas = useLoaderData()
    const findData = datas.find(data => data.product_id === id)
    const { product_title, product_image, price, description, specification, availability, rating } = findData;
    const navigate = useNavigate()

    // add to cart and wishlist function
    const { addToCart, addToWishlist, cartItems, wishlistItems, deleteWishlistCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        const checkCart = cartItems.find(item => item.product_id === product.product_id)
        if (checkCart) {
            return Swal.fire({
                title: "Already added !",
                text: "Already added this product to Cart section!",
                icon: "warning"
            });
        }
        else {
            addToCart(product)
            deleteWishlistCart(product.product_id)
            Swal.fire({
                title: "Good job!",
                text: "Your cart added Cart Section!",
                icon: "success"
            });
        }
    }


    // handle wishlist button 
    const [isDisable, setIsDistable] = useState(false)
    const handleAddToWishlist = (product) => {

        const checkWishlist = wishlistItems.find(item => item.product_id === product.product_id)
        const checkCart = cartItems.find(item => item.product_id === product.product_id)
        if (checkWishlist) {
            return Swal.fire({
                title: "Already added !",
                text: "Already added this product to Wishlist section!",
                icon: "warning"
            });
        }
        else if (checkCart) {
            if (checkCart) {
                return Swal.fire({
                    title: "You added to Cart",
                    text: "Already added this product to Cart!",
                    icon: "error"
                });
            }
        }
        else {
            addToWishlist(product)
        }

        Swal.fire({
            title: "Good job!",
            text: "Your cart added Wishlist Section!",
            icon: "success"
        });
        setIsDistable(true)
    }


    return (
        <div className="relative">
            <Helmet>
                <title>Product Details | Gadget-shop</title>
            </Helmet>

            <div>
                <UseBanner
                    title="All Products"
                    pb={true}
                    btn={false}
                ></UseBanner>
            </div>
            <button className="absolute pinkOutletBtn top-2 left-2" onClick={() => navigate(-1)}>Back</button>
            <div className="bg-[#F7F7F7] md:px-20 px-5  rounded-b-3xl">
                <div className=" md:flex items-center gap-10 bg-white rounded-2xl p-5 md:-top-[100px] -top-[80px] relative shadow-lg">
                    <div className="md:w-[450px] md:h-[500px] border rounded-2xl md:mb-0 mb-4">
                        <img className="w-full h-full object-contain" src={product_image} alt={product_title} />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-xl font-bold">{product_title}</h1>
                        <p className="font-bold ">Price : <span className="text-2xl font-bold">{price}</span> $</p>
                        <div className="flex">
                            <div className="border rounded-full border-green-400 text-green-400 px-3 py-1">
                                {`${availability ? 'In Stock' : 'Out of Stoke'}`}
                            </div>
                        </div>
                        <p>{description}</p>
                        <div>
                            <p className="font-bold mb-2">Specification:</p>
                            {
                                specification.map((item, idx) => <p key={idx}>{idx + 1} . {' '}{item}</p>)
                            }
                        </div>
                        <div>
                            <p className="font-bold mb-2">Rating</p>
                            <div className="flex gap-4">
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={rating}
                                    readOnly
                                />
                                <p className="px-3 py-1 rounded-full bg-gray-200 ">{rating}</p>
                            </div>
                            {/* button section  */}
                            <div className="flex gap-4 mt-4">
                                <button
                                    onClick={() => handleAddToCart(findData)}
                                    className="pinkOutletBtn !bgPink !text-white flex items-center gap-3">
                                    Add To Card
                                    < PiShoppingCartThin></PiShoppingCartThin>
                                </button>
                                <button
                                    disabled={isDisable}
                                    onClick={() => handleAddToWishlist(findData)}
                                    className={`p-4 shadow-lg border border-[#9538E2] rounded-full text-black flex items-center gap-3 ${isDisable ? 'border-gray-200 bg-gray-100' : ''}`}>
                                    <PiHeartStraightThin className="w-7 h-7"></PiHeartStraightThin>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductsDetails;