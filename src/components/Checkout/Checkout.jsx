import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cartitem from "../cart/Cartitem";
import "./Checkout.css"


 
const Checkout = () => {

        const { cart, removeItem, isInCart} = useContext(CartContext)

    const totalSum = cart.reduce((acc, item) => acc + (item.quantity * item.precio), 0);


    return(
        <div className="cart">
            <h1>Finaliza tu compra</h1>
            <div className="checkout">
                <div className="form">
                    <p>Contacto</p>
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Correo electrónico"/>
                    <input type="text" placeholder="Teléfono"/>
                </div>
                <div className="items-form">
                    <div>
                    {cart.map((item,id) => (
                        <Cartitem item={item} key={item.id} removeItem={removeItem} itemInCart={isInCart(item.id)}/>
                    )
                    )
                    }
                    </div>
                    <div className="totales-form">
                    <p>Total:</p>
                    <p>$ {Math.floor(totalSum)}</p>
                    </div>
                </div>                 
            </div>     
            <div className="finalizar-form">
                <button className="boton-link-comprar">Pagar</button>
            </div>
        </div>
        )
}

export default Checkout;