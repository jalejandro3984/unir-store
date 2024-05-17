import React from "react";
import { useEmptyCart } from "../hooks/useEmptyCart";

export const CheckoutSuccess = () => {
    useEmptyCart();

    return (
        <div className="container mt-3 text-center mx-auto my-auto">
            <h2>Thanks for your purchase. Your order is on its way.</h2>
        </div>
    );
}
