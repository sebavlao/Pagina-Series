import { useParams } from "react-router-dom";
import { useSerieId } from "../../utils/useSerieId";
import { Info } from "./Info";
import { Image } from "./Image";
import { useSeriesList } from "../../utils/useSeriesList";
import { GlideComponent } from "../generalComponentes/GlideComponent";
import { GenreCoincidence } from "./GenreCoincidence";
import { useEffect } from "react";

export const SectionInfo = () => {
    let { serieId } = useParams();
    const {serie, isLoading} = useSerieId(`/tv/${serieId}`)
    const { series } = useSeriesList(`/tv/${serieId}/recommendations`)

    useEffect(() => {}, [serieId])

    return (
        <>
            {isLoading ? (
                <p>Cargando...</p> 
            ) : (
                <>
                    <section className="relative h-[70vh] flex justify-center px-[10%] gap-10">
                        <>
                            <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
                            <img className="absolute top-0 w-full h-full opacity-40" src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`} alt="" />
                            <Info name={serie.name} date={serie.first_air_date} genres={serie.genres} seasons={serie.seasons} description={serie.overview}/>
                            <Image serieImg={serie.poster_path}/>
                        </>
                    </section>
                    <section className="py-40 bg-gradient-to-r from-rose-700 to-gray-900 font-primary">
                        <article className="flex">
                            <h1 className="text-slate-50 text-4xl w-[20%] sm:px-20 sm:text-9xl">You May Like</h1>
                            <GlideComponent series={series}/>
                        </article>
                    </section>
                </>
                )}
        </>
    )
}