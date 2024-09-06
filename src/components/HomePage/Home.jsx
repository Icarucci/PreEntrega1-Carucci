import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {

    return(
        <main className="mainHome">
            <h1>¡Bienvenido a FCamisetas!</h1>     
            <Link to={`/camisetas`} className="link">
                <h2>VER PRODUCTOS</h2>
            </Link>
        </main>
           
    )
}

export default HomePage;