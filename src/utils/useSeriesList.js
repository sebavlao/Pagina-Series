import { useState, useEffect } from "react";
import { fetchData } from "./fetch";

export const useSeriesList = (path) => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetchData(path).then(series => setSeries(series.results));
    }, []);
    
    return series
}