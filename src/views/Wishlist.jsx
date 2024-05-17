import React, { useContext } from "react";
import { StoreContext } from "../components/StoreContext";
import { WishlistItem } from "../components/WishlistItem";

export const Wishlist = () => {
    const { wishlist } = useContext(StoreContext);

    return (
        <div>
            <h2 className="mx-2">Wishlist</h2>
            <div className="container mt-3">
                {wishlist.length === 0 && <h5 className="text-center">Your wishlist is empty</h5>}
                {wishlist.length > 0 && (
                    <div className="list-group">
                        {wishlist.map((product, key) => <WishlistItem key={key} item={product}/>)}
                    </div>
                )}
            </div>
        </div>
    );
}
