import Carrito from "../NavBar/cart.png"
import "../Item/Item.css";


export const CartWidget = () =>{
    return <div className="contador-carrito">
        <img src={Carrito} alt="Carrito" width="40" height="40"/>
        <h3 className="m-2">0</h3>
    </div>
}