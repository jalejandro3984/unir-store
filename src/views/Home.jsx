import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Category } from "../components/Category";
import { Loader } from "../components/Loader";

export const Home = () => {
    const categories = useFetch('products/categories');

    return (
        <div>
            <div className="text-center">
                {categories.isLoading && <Loader visible={categories.isLoading}/>}
            </div>
            <div className="container">
                <div className="row">
                    {categories.fetchResponse.map((category, key) => <Category key={key} category={category}/>)}
                </div>
            </div>
        </div>
    );
}
