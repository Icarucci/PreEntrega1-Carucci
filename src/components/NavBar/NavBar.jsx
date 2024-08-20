import { CartWidget } from "./CartWidget";
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
                            <a className="nav-link" href="#">CAMISETAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOMBRE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MUJER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NIÑOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Selecciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Equipos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">OUTLET</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};