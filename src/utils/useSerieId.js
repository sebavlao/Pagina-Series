import { useEffect, useState } from "react";
import { fetchData } from "./fetch";

export const useSerieId = (path) => {
    const [serie, setSerie] = useState({})

    useEffect(() => {
        fetchData(path).then(serie => setSerie(serie));
    }, []);

    return serie;
}