import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [cartItems, setCartItems] = useState([])
    const [wishlistItems, setWishlistItems] = useState([])
    // const navigate = useNavigate()

    const addToCart = (product) => {
        console.log(user);
        if (!user) {
            // navigate('/login')
            console.log('user not found', user);

        }
        console.log('user found');
        // else {
            // const newCart = [...cartItems, product]
            // setCartItems(newCart)
        // }
    }
    const sortByPrice = () => {
        const sort = [...cartItems].sort((a, b) => b.price - a.price)
        setCartItems(sort)
    }

    const addToWishlist = (product) => {
        const newCart = [...wishlistItems, product]
        setWishlistItems(newCart)
    }

    const deleteWishlistCart = (id) => {
        const filterData = wishlistItems.filter(item => item.product_id !== id)
        setWishlistItems(filterData);
    }

    const deleteCartlistInCart = (id) => {
        const filterData = cartItems.filter(item => item.product_id !== id)
        setCartItems(filterData);
    }
    return (
        <CartContext.Provider value={{ cartItems, wishlistItems, addToCart, addToWishlist, deleteWishlistCart, deleteCartlistInCart, sortByPrice, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}