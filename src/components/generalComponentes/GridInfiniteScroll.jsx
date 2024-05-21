import { Card } from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

export const GridInfiniteScroll = ({series, moreSeries}) => {
    return (
        <InfiniteScroll dataLength={series.length} next={moreSeries} hasMore={true}>
            <ul className="grid grid-cols-auto-fit-100 gap-6 justify-items-center p-5">
                    {series.map((serie) => (
                        <Card key={serie.id} serieMap={serie}/>
                    ))}
            </ul>
        </InfiniteScroll>
    )
}