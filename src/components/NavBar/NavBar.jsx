import { CartWidget } from "./CartWidget";
import Logo from "./FCLogo.png";

export const Nav = () =>{
    return <div>
        <nav>
            <img src={Logo} alt="Logo" />
            <ul>
                <li><a href="#">CAMISETAS</a></li>
                <li><a href="#">HOMBRE</a></li>
                <li><a href="#">MUJER</a></li>
                <li><a href="#">NIÑOS</a></li>
                <li><a href="#">Selecciones</a></li>
                <li><a href="#">Equipos</a></li>
                <li><a href="#">OUTLET</a></li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    </div>
}