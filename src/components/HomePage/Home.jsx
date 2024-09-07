import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {

    return(
        <main className="mainHome">
            <div className="divH1">
                <p>¡Bienvenido a FCamisetas!</p>     
            </div>
            <div className="divH2">
                <Link to={`/camisetas`} className="link">
                    <p>Ingresá aquí</p>
                </Link>
            </div>

        </main>
           
    )
}

export default HomePage;