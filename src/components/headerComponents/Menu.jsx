import { Link } from "react-router-dom"
import { Categorias } from "./Categorias"

export const Menu = () => {
    return (
        <ul className="flex gap-4">
            <li>
                <Link to="/">Trending</Link>
            </li>
            <li>
                <Categorias />
            </li>
        </ul>
    )
}