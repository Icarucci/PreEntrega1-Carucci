import { Link } from "react-router-dom";
import "./Home.css";
import startConfetti from "./confetti";
import { useEffect, useRef } from "react";

const HomePage = () => {
    const mainRef = useRef(null);

    const stopConfetti = () => {
        const canvas = document.getElementById("confetti-canvas");
        if (canvas) {
            canvas.parentNode.removeChild(canvas);
        }
    };

    useEffect(() => {
        if (mainRef.current) {
            startConfetti(mainRef.current);

            const handleClick = () => {
                stopConfetti();
            };

            window.addEventListener("click", handleClick);

            return () => {
                window.removeEventListener("click", handleClick);
                stopConfetti();
            };
        }
    }, []);

    return (
        <main ref={mainRef} className="mainHome">
            <div className="divH1">
                <p>¡Bienvenido a FCamisetas!</p>     
            </div>
            <div className="divH2">
                <Link to={`/camisetas`} className="link">
                    <p>¡Elegí tu camiseta!</p>
                </Link>
            </div>
        </main>
    );
}

export default HomePage;
