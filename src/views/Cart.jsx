import React, { useContext } from "react";
import { StoreContext } from "../components/StoreContext";
import { CartItem } from "../components/CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const navigate = useNavigate();
    const { cartProducts } = useContext(StoreContext);
    const total = cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    return (
        <div>
            <h2 className="mx-2">Cart</h2>
            <div className="container mt-3">
                { cartProducts.length === 0 && <h5 className="text-center">Your cart is empty</h5> }
                {
                    cartProducts.length > 0
                    && (
                        <div className="list-group">
                            {cartProducts.map((product, key) => <CartItem key={key} item={product}/>)}
                        </div>
                    )
                }
                {
                    cartProducts.length > 0
                    && (
                        <div className="d-flex justify-content-end align-items-center mt-3">
                            <button
                                onClick={() => navigate('/checkout')}
                                className="btn btn-warning btn-sm me-2"
                            >
                                Proceed to checkout
                            </button>
                            <h5>
                                Total ({cartProducts.length} product{cartProducts.length > 1 ? "s" : ""}): <strong>US${total}</strong>
                            </h5>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
