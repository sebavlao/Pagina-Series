import { NavLink } from "react-router-dom"

export const Menu = () => {
    return (
        <ul className="flex gap-4 max-sm:hidden">
            <li>
                <form>
                    <div className="flex rounded-full focus-within:outline">
                        <input type="text" placeholder="buscar" className="rounded-full focus:outline-none pl-2"/>
                        <button className=""><img src="/search_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></button>
                    </div>
                </form>
            </li>
            <li>
                <NavLink to="/trending">Trending</NavLink>
            </li>
        </ul>
    )
}