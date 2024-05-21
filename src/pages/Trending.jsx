import { GridCard } from "../containers/GridCardLanding"
import { Header } from "../containers/Header"

export const Trending = () => {
    return (
        <>
            <Header/>
            <GridCard endPoint={"/trending/tv/week"} title={"Trending"}/>
        </>
    )
}