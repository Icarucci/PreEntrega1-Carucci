import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cartitem from "./Cartitem";
import "./Cart.css";

const Cart = () => {
    const { cart } = useContext(CartContext)

    return(
        <div className="cart">
            <h1>Carrito de compras</h1>
            <div className="titulos">
                <h2>Producto</h2>
                <h2>Precio</h2>
                <h2>Cantidad</h2>
                <h2>Subtotal</h2>
            </div>
            <div className="items">
                {cart.map((item,id) => (
                    <Cartitem item={item} key={id}/>
                )
                )
                }
            </div>
            <div className="finalizar">
                <button>Seguir Comprando</button>
                <button>Pagar</button>
            </div>
        </div>
        )
}

export default Cart;