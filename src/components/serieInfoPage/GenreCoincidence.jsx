import { useSeriesList } from "../../utils/useSeriesList"
import { GlideComponent } from "../generalComponentes/GlideComponent"

export const GenreCoincidence = ({genre}) => {
    const { series } = useSeriesList(`/tv?with_genres=${genre.id}`)

    return (
        <>
            <h1 className="text-slate-50 text-4xl w-[20%] sm:px-20 sm:text-9xl">{genre.name}</h1>
            <GlideComponent series={series}/>
        </>
        
    )
}