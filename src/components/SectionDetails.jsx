import { Info } from "./serieInfoComponents/Info";
import { Image } from "./serieInfoComponents/Image";

export const SectionDetails = ({ serie }) => {
    return (
        <section className="relative h-[70vh] flex justify-center px-[10%] gap-10">
            <>
                <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
                <img className="absolute top-0 w-full h-full opacity-40" src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`} alt="" />
                <Info name={serie.name} date={serie.first_air_date} genres={serie.genres} seasons={serie.seasons} description={serie.overview}/>
                <Image serieImg={serie.poster_path}/>
            </>
        </section>
    )
}