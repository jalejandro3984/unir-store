import React, { useContext } from "react";
import { StoreContext } from "./StoreContext";

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
                    <div className="col-md-8">
                        <div className="card-body mx-4">
                            <h5 className="card-title mb-2">{item.title}</h5>
                            <p>
                                <button onClick={() => moveToCart(item)} className="btn btn-warning btn-sm me-2">Add to
                                    cart
                                </button>
                                <button onClick={() => removeProductFromWishlist(item)}
                                        className="btn btn-outline-danger btn-sm">Delete
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card-body text-end">
                            <p className="card-text"><strong>US${item.price}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}