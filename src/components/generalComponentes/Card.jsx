import { Link } from "react-router-dom";

export const Card = ({ serieMap }) => {
    return (
        <Link className="w-[140px] sm:w-[218px] max-h-[340px] flex-none snap-center" to={"/" + serieMap.id}>
            <li className="hover:scale-110 h-[100%] hover:transition-all transition-all text-ellipsis overflow-hidden">
                <img className="h-[290px] max-w-[193px] rounded-lg" src={`https://image.tmdb.org/t/p/w500${serieMap.poster_path}/images`} alt="" />
                <strong className="font-secondary whitespace-nowrap">{serieMap.name}</strong>
            </li>
        </Link>
    );
}