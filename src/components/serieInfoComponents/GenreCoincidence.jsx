import { useSeriesList } from "../../hooks/useSeriesList"
import { GlideComponent } from "../generalComponentes/GlideComponent"

export const GenreCoincidence = ({genre}) => {
    const { series } = useSeriesList("/discover/tv", `?with_genres=${genre.id}&page=${Math.ceil(Math.random()*10)}`)

    return (
        <>
            <h1 className="text-slate-50 text-7xl w-[100%]">{genre.name}</h1>
            <GlideComponent series={series}/>
        </>
        
    )
}