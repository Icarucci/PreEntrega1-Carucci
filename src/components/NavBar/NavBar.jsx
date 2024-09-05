import { CartWidget } from "../CartWidget/CartWidget.jsx";
import Logo from "./FCLogo.png";

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Logo" width="300" height="90" className="d-inline-block align-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">CAMISETAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hombre">HOMBRE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/mujer">MUJER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/niños">NIÑOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/selecciones">Selecciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/equipos">Equipos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/outlet">OUTLET</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};