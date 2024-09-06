import { CartWidget } from "../CartWidget/CartWidget.jsx";
import Logo from "./FCLogo.png";
import { NavLink , Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={Logo} alt="Logo" width="300" height="90" className="d-inline-block align-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to={`/camisetas`} className="nav-link">
                            <h2 className="nav-link">CAMISETAS</h2>
                        </NavLink>
                        <NavLink to={`/categoria/hombre`} className="nav-link">
                            <h2 className="nav-link">HOMBRE</h2>
                        </NavLink>
                        <NavLink to={`/categoria/mujer`} className="nav-link">
                            <h2 className="nav-link">MUJER</h2>
                        </NavLink>
                        <NavLink to={`/categoria/niño`} className="nav-link">
                            <h2 className="nav-link">NIÑOS</h2>
                        </NavLink>
                        <NavLink to={`/categoria/seleccion`} className="nav-link">
                            <h2 className="nav-link">Selecciones</h2>
                        </NavLink>
                        <NavLink to={`/categoria/equipo`} className="nav-link">
                            <h2 className="nav-link">Equipos</h2>
                        </NavLink>
                        <NavLink to={`/categoria/outlet`} className="nav-link">
                            <h2 className="nav-link">OUTLET</h2>
                        </NavLink>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};