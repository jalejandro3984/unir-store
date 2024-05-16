import { useEffect, useState } from "react";

export const useFetch = (path) => {
    const url = `https://fakestoreapi.com/${path}`;
    const [fetchResponse, setFetchResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRequest = async () => {
            let res = await fetch(url);
            let data = await res.json();
            setFetchResponse(data);
            setIsLoading(false);
        };

        fetchRequest();
    }, [url])

    return { fetchResponse, isLoading }
}
