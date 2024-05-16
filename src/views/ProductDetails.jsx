import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loader } from "../components/Loader";
import { StoreContext } from "../components/StoreContext";
import { useNavigate } from "react-router-dom";

export const ProductDetails = () => {
    const { id } = useParams();
    const path = `products/${id}`;
    const productResponse = useFetch(path);
    const product = productResponse.fetchResponse;
    const { addProductToCart, addProductToWishlist } = useContext(StoreContext);
    const navigate = useNavigate();
    const addToCartAndNavigate = (product) => {
        addProductToCart(product);
        navigate("/cart");
    };

    return (
        <div>
            <div className="text-center">
                { productResponse.isLoading && <Loader visible={productResponse.isLoading} /> }
            </div>
            <div className={`${ productResponse.isLoading ? "d-none " : "" } container mt-5`}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h2>{product.title}</h2>
                        <p className="price">US${product.price}</p>

                        <button onClick={() => addToCartAndNavigate(product)}
                                className="btn btn-warning mt-3 mb-3 me-2">
                            <FontAwesomeIcon icon="shopping-cart"/> Add to cart
                        </button>
                        <button onClick={() => addProductToWishlist(product)} className="btn btn-outline-danger mt-3 mb-3"><FontAwesomeIcon icon="heart"/></button>

                        <div className="accordion" id="productDetails">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Description
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#productDetails"
                                >
                                    <div className="accordion-body">
                                        <p className="text-justify">{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
