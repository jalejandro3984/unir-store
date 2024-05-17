import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Finder } from "./Finder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "./StoreContext";

export const Menu = () => {
    const { cartProducts, wishlist } = useContext(StoreContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div id="store-navbar-bar" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/wishlist">
                                <FontAwesomeIcon icon="heart"/> Wishlist({wishlist.length})
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <FontAwesomeIcon icon="shopping-cart"/> Cart ({cartProducts.length})
                            </Link>
                        </li>
                    </ul>
                </div>
                <Finder/>
            </div>
        </nav>
    );
}
