import React from "react";
import { useFetch } from '../hooks/useFetch';
import { Product } from "../components/Product";
import { Loader } from "../components/Loader";
import { useParams } from "react-router-dom";

export const ProductList = () => {
    const { keyword } = useParams();
    let url = `${process.env.REACT_APP_API_URL_BUSCADOR}/products`;
    if (keyword) {
        url = `${url}/?keyword=${keyword}`;
    }
    const response = useFetch(url);
    let products = response.fetchResponse;
    const isLoading = response.isLoading;

    return (
        <div>
            <div className="text-center">
                {isLoading && <Loader visible={isLoading}/>}
            </div>
            <div className="container">
                <div className="row">
                    {products.map((product, key) => <Product key={key} product={product}/>)}
                </div>
            </div>
        </div>
    );
};
