import Carrito from "../NavBar/cart.png"
import "../Item/Item.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart" className="contador-carrito">
            <img src={Carrito} alt="Carrito" width="40" height="40" />
            <h3 className="m-2">{totalQuantity}</h3>
        </Link>
    );
};
