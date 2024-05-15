import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import { useSerieId } from "../utils/useSerieId"

export const SerieInfo = () => {
    let { serieId } = useParams();
    const serie = useSerieId(`/tv/${serieId}`);
    console.log(serie)

    return (
        <>
            <Header/>
            <section className="relative h-[70vh] flex justify-center px-[10%] gap-10">
                <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
                <img className="absolute top-0 w-full h-full opacity-40" src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`} alt="" />
                <article className="relative z-10 font-primary text-slate-50 w-[40%] flex flex-col gap-1 justify-center">
                    <h1 className="text-5xl font-bold">{serie.name}</h1>
                    <div className="flex gap-4 mb-10">
                        <h4>{serie.first_air_date ? serie.first_air_date.slice(0, 4) : ''}</h4>
                        <h4>{serie.genres ? serie.genres.map(genre => genre.name.split(" ")[0]).join("-") : ""}</h4>
                        <h4>Seasons: {serie.seasons ? serie.seasons.length : ""}</h4>
                    </div>
                    <p className="font-medium text-xl">{serie.overview}</p>
                </article>
                <article className=" relative  z-10 flex flex-col justify-center">
                    <img className="rounded-3xl w-[300px] h-[500px]"  src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt="" />
                </article>
            </section>
        </>
    )
}