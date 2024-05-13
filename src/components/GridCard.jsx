import { Card } from "./Card";
import { useSeriesList } from "../utils/useSeriesList";

export const GridCard = () => {
    const series = useSeriesList("/discover/tv");

    return (
        <section className="px-[10%]">
            <h1 className="font-primary text-4xl font-bold text-center mb-10 mt-5">Series</h1>
            <ul className="grid grid-cols-auto-fit-100 gap-6 justify-items-center">
                {series.map((serie) => (
                    <Card key={serie.id} serieMap={serie}/>
                ))}
            </ul>
        </section>
    );
};