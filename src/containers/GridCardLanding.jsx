import { useSeriesList } from "../hooks/useSeriesList";
import { GridInfiniteScroll } from "../components/generalComponentes/GridInfiniteScroll";

export const GridCard = ({endPoint, title}) => {
    const {series, moreSeries} = useSeriesList(endPoint);
    
    return (
        <section className="px-[10%] bg-[#1F1F1F] text-slate-50">
            <h1 className="font-primary text-5xl font-bold text-center sm:mb-10 pt-5">{title}</h1>
            <GridInfiniteScroll series={series} moreSeries={moreSeries}/>
        </section>
    );
};