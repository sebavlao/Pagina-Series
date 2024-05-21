import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export const useSerieId = (path) => {
    const [serie, setSerie] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        fetchData(path).then(serie => {
            setSerie(serie)
            setIsLoading(false)
        });
    }, [path]);

    return { serie, isLoading }
}