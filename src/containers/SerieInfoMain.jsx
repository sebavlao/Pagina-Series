import { useParams } from "react-router-dom";
import { useSerieId } from "../hooks/useSerieId";
import { useSeriesList } from "../hooks/useSeriesList";
import { useEffect } from "react";
import { SectionDetails } from "../components/serieInfoComponents/SectionDetails";
import { SectionCateogories } from "../components/serieInfoComponents/SectionCategories";

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
                    <SectionDetails serie={serie}/>
                    <SectionCateogories serie={serie} series={series}/>
                </>
                )}
        </>
    )
}