import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Category } from "./Category";
import { Loader } from "../components/Loader";

export const Home = () => {
    let url = `${process.env.REACT_APP_API_URL}/categories`;
    const categories = useFetch(url);
    return (
        <div>
            <div className="text-center">
                {categories.isLoading && <Loader visible={categories.isLoading} />}
            </div>
            <div className="container">
                <div className="row">
                    {categories.fetchResponse.map((category, index) => <Category key={index} index={index} category={category.name}/>)}
                </div>
            </div>
        </div>
    );
}
