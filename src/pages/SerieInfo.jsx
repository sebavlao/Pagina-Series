import { useParams } from "react-router-dom"
import { useSerieId } from "../utils/useSerieId"

export const SerieInfo = () => {
    let { serieId } = useParams();
    const serie = useSerieId(`/tv/${serieId}`);

    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt="" />
            {console.log(`https://image.tmdb.org/t/p/w500/${serieId}`)}
            <strong>{serie.name}</strong>
        </>
    )
}