import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [wishlistItems, setWishlistItems] = useState([])

    const addToCart = (product) => {
        const newCart = [...cartItems, product]
        setCartItems(newCart)
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