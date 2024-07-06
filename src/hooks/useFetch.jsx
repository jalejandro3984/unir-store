import { useEffect, useState } from "react";
import env from "react-dotenv";

export const useFetch = (path) => {
    if (!path) {
        throw new Error("Introduzca un path válido.");
    }
    const url = `${env.API_URL}${path}`;
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
