import { NavLink } from "react-router-dom"

const activeStyle = "text-red-500"
const inactiveStyle = "text-white"

export const NavBar = () =>{
    return(
        
    <nav className="space-x-2 bg-blue-500">

        <NavLink to={"/"} className={({ isActive }) =>
        `${isActive? activeStyle: inactiveStyle}`}
        
        >Home</NavLink>

        <NavLink to={"/products"} className={({ isActive }) =>
        `${isActive? activeStyle: inactiveStyle}`}
        
        >Products</NavLink>

        <NavLink to={"/contact"} className={({ isActive }) =>
        `${isActive? activeStyle: inactiveStyle}`}
        
        >Contactos</NavLink>

        <NavLink to={"/about"} className={({ isActive }) =>
        `${isActive? activeStyle: inactiveStyle}`}
        
        >About</NavLink>

        <NavLink to={"/faq"} className={({ isActive }) =>
        `${isActive? activeStyle: inactiveStyle}`}
        
        >Faq</NavLink>

    </nav>)
}