import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";

import "../styles/wishlist-item.css";

export const WishlistItem = ({item}) => {
    const { removeProductFromWishlist, addProductToCart } = useContext(StoreContext);

    const moveToCart = (item) => {
        addProductToCart(item)
        removeProductFromWishlist(item);
    };

    return (
        <div>
            <div className="list-group-item my-1 rounded-2">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={item.image} alt={item.title} className="img-fluid rounded-start"/>
                    </div>
                    <div className="store__wishlist__item__info col-md-8">
                        <div className="store__wishlist__item__info mx-4">
                            <h5 className="card-title mb-2">{item.title}</h5>
                            <p>
                                <button onClick={() => moveToCart(item)} className="btn btn-warning btn-sm me-2">
                                    Add to cart
                                </button>
                                <button
                                    onClick={() => removeProductFromWishlist(item)}
                                    className="btn btn-outline-danger btn-sm"
                                >
                                    Delete
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="store__wishlist__item__body__price">
                            <p className="store__wishlist__item__body__price--price card-text">US${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
