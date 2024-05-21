import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";

export const useSeriesList = (path, params = "") => {
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(path + params).then(seriesData => setSeries(seriesData.results))
    }, [path]);

    const moreSeries = () => {
        setPage(page + 1)
        fetchData(path + `?page=${page + 1}`).then(seriesData => setSeries(prev => [...prev, ...seriesData.results]))
    }

    return { series, moreSeries }
}