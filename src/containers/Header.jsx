import { Link } from "react-router-dom";
import { Menu } from "../components/headerComponents/Menu"

export const Header = () => {
    return (
        <header className="px-[10%] h-[100px] text-center flex sticky z-20 top-0 left-0 right-0 bg-slate-600">
            <nav className="mx-auto flex justify-between items-center w-full">
                <div className="w-[7%] min-w-[60px]">
                    <Link to="/">
                        <img src="/logo-film.svg" alt="a" className="w-[100%]"/>
                    </Link>
                </div>
                <Menu />
            </nav>
        </header>
    )
}