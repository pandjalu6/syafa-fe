import { NavLink } from "react-router-dom";

const Nabvar = () => {
    return (
        <nav style={{height: "60px", width: "100%"}} className="shadow flex flex-row justify-center md:justify-end items-center fixed bg-white">
            <ul className="flex flex-row">
                <li className="mx-5 font-medium nav">
                    <NavLink activeClassName="active" to="/">Home</NavLink>
                </li>
                <li className="mx-5 font-medium nav ">
                    <NavLink activeClassName="active" to="/about">Layanan</NavLink>
                </li>
                <li className="mx-5 font-medium nav ">
                    <NavLink activeClassName="active" to="/users">Galery</NavLink>
                </li>
                <li className="mx-5 font-medium nav ">
                    <NavLink activeClassName="active" to="/test">Tentang Kami</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nabvar;