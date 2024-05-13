import { Link } from "react-router-dom";
import { Menu } from "./headerComponents/Menu"

export const Header = () => {
    return (
        <header className="px-[10%]">
            <nav className="mx-auto flex items-center justify-between pt-4">
                <div>
                    <Link to="/">
                        <img src="/logo-film.svg" alt="a" className="w-[40%]"/>
                    </Link>
                </div>
                <Menu />
            </nav>
        </header>
    )
}