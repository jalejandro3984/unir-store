import React from "react";
import { useFetch } from '../hooks/useFetch';
import { Product } from "../components/Product";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

export const CategoryList = () => {
    const { category } = useParams();
    const url = (!category) ? `${process.env.REACT_APP_API_URL}/categories` : `${process.env.REACT_APP_API_URL}/categories/${category}/products`;
    const categoryProductList = useFetch(url);
    return (
        <div>
            <h1 className="text-capitalize m-3">{category}</h1>
            <div className="text-center">
                {categoryProductList.isLoading && <Loader visible={categoryProductList.isLoading} />}
            </div>
            <div
                className={`${categoryProductList.isLoading ? "d-none " : ""} d-flex flex-row flex-wrap justify-content-center`}>
                {categoryProductList.fetchResponse.map((product, key) => <Product key={key} product={product} show_description={false} />)}
            </div>
        </div>
    );
};
