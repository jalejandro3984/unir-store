import React, { useContext } from "react";
import { StoreContext } from "../components/StoreContext";
import { CartItem } from "../components/CartItem";

export const Cart = () => {
    const { cartProducts } = useContext(StoreContext);
    const total = cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    return (
        <div>
            <h2 className="mx-2">Cart</h2>
            <div className="container mt-3">
                { cartProducts.length === 0 && <h5 className="text-center">Your Cart is empty</h5> }
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
                        <div className="card-footer text-end">
                            <h5>Total ({cartProducts.length} product{cartProducts.length > 1 ? "s" : ""}): <strong>US${total}</strong></h5>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
