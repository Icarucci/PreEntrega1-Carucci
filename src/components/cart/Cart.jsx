import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Cartitem from "./Cartitem";
import "./Cart.css";

const Cart = () => {
    const { cart, removeItem, clearCart, isInCart } = useContext(CartContext)

    const totalSum = cart.reduce((acc, item) => acc + (item.quantity * item.precio), 0);

    return(
        <div className="cart">
            <h1>Carrito de compras</h1>
            <div className="titulos">
                <h2 className="producto">Producto</h2>
                <h2 className="precio">Precio</h2>
                <h2 className="cantidad">Cantidad</h2>
                <h2 className="subtotal">Subtotal</h2>
                <div className="borrar"></div>
            </div>
            <div className="items">
                {cart.map((item,id) => (
                    <Cartitem item={item} key={item.id} removeItem={removeItem} itemInCart={isInCart(item.id)}/>
                )
                )
                }
            </div>     
            <div className="divtotales">
            <div className="totalesvacio"></div>
            <div className="totales">
                    <p>Total:</p>
                    <p>$ {Math.floor(totalSum)}</p>
            </div>
            </div>      
            <div className="finalizar">
                <Link to="/camisetas">
                        <button className="boton-link">Seguir Comprando</button>
                </Link>
                <button className="boton-link" onClick={clearCart}>Vaciar Carrito</button>
                <button className="boton-link-comprar">Pagar</button>
            </div>
        </div>
        )
}

export default Cart;