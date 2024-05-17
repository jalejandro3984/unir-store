import { useContext, useEffect } from "react";
import { StoreContext } from "../components/StoreContext";

export const useEmptyCart = () => {
    const { setCartProducts } = useContext(StoreContext);

    useEffect(() => {
        setCartProducts([]);
    }, [setCartProducts]);
};