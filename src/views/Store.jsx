import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StoreRouter } from "../router/StoreRouter";
import { StoreContext } from "../components/StoreContext";

import "../styles/store.css";

export const Store = () => {
    const [cartProducts, setCartProducts] = React.useState([]);
    const [wishlist, setWishlist] = React.useState([]);

    const addProductToCart = (product) => {
        let productInCart = cartProducts.find((item) => item.id === product.id);
        if (productInCart) {
            productInCart.quantity++;
            setCartProducts([...cartProducts]);
        } else {
            product.quantity = 1;
            setCartProducts([...cartProducts, product]);
        }
    };

    const removeProductFromCart = (product) => {
        let productInCart = cartProducts.find((item) => item.id === product.id);
        if (productInCart.quantity > 1) {
            productInCart.quantity--;
            setCartProducts([...cartProducts]);
        } else {
            setCartProducts(cartProducts.filter((item) => item.id !== product.id));
        }
    };

    const addProductToWishlist = (product) => {
        let productInWishlist = wishlist.find((item) => item.id === product.id);
        if (!productInWishlist) {
            setWishlist([...wishlist, product]);
        }
    };

    const removeProductFromWishlist = (product) => {
        setWishlist(wishlist.filter((item) => item.id !== product.id));
    };

    return (
        <div className="store">
            <Header/>
            <StoreContext.Provider value={{
                cartProducts,
                wishlist,
                addProductToCart,
                removeProductFromCart,
                addProductToWishlist,
                removeProductFromWishlist
            }}>
                <StoreRouter/>
            </StoreContext.Provider>
            <Footer/>
        </div>
    );
}
