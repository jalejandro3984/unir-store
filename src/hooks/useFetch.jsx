import { useEffect, useState } from "react";
import env from "react-dotenv";

export const useFetch = (url) => {
    if (!url) {
        throw new Error("Introduzca una url válida.");
    }
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
