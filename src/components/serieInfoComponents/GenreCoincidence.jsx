import { useSeriesList } from "../../hooks/useSeriesList"
import { GlideComponent } from "../generalComponentes/GlideComponent"

export const GenreCoincidence = ({genre}) => {
    const { series } = useSeriesList("/discover/tv", `?with_genres=${genre.id}&page=${Math.ceil(Math.random()*10)}`)

    return (
        <>
            <h1 className="text-slate-50 sm:text-5xl text-4xl lg:text-6xl xl:text-7xl w-[100%]">{genre.name}</h1>
            <GlideComponent series={series}/>
        </>
        
    )
}