import { Card } from "../components/generalComponentes/Card";
import { useSeriesList } from "../hooks/useSeriesList";
import InfiniteScroll from "react-infinite-scroll-component";

export const GridCard = () => {
    const {series, moreSeries} = useSeriesList("/discover/tv");

    return (
        <section className="px-[10%]">
            <h1 className="font-primary text-5xl font-bold text-center mb-10 mt-5">Series</h1>
            <InfiniteScroll dataLength={series.length} next={moreSeries} hasMore={true}>
                <ul className="grid grid-cols-auto-fit-100 gap-6 justify-items-center p-5">
                        {series.map((serie) => (
                            <Card key={serie.id} serieMap={serie}/>
                        ))}
                </ul>
            </InfiniteScroll>
        </section>
    );
};