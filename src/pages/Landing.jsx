import { GridCard } from "../containers/GridCardLanding"
import { Header } from "../containers/Header"

export const Landing = () => {
    return (
        <>
            <Header/>
            <GridCard endPoint={"/discover/tv"} title={"Series"}/>
        </>
    )
}