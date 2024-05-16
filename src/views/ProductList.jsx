import React from "react";
import { useFetch } from '../hooks/useFetch';
import { Product } from "../components/Product";
import { Loader } from "../components/Loader";

export const ProductList = () => {
    const productList = useFetch('products');

    return (
        <div>
            <div className="text-center">
                {productList.isLoading && <Loader visible={productList.isLoading}/>}
            </div>
            <div className="container">
                <div className="row">
                    {productList.fetchResponse.map((product, key) => <Product key={key} product={product}/>)}
                </div>
            </div>
        </div>
    );
};
