import "./Cart.css";
import { useLocation } from "react-router-dom";


const Cartitem = ({item, removeItem}) => {

    const location = useLocation();
    const subtotal = item.quantity * item.precio;
        

    return(
        <div className="productos">
            <div className="producto">
            <img className="imagen" src={item.imagen} alt={item.nombre} />
            <p>{item.nombre}</p>
            </div>
            {location.pathname === '/cart' && (
            <div  className="precio">
                <p>$ {item.precio}</p>
            </div>
            )}
            <div  className="cantidad">
                <p>{item.quantity}</p>
            </div>
            <div  className="subtotal">
                <p>$ {subtotal}</p>
            </div>
            <div className="remove">
                {location.pathname === '/cart' && (
                <button onClick={() => removeItem(item.id)}>X</button>
                )}
            </div>
        </div>

    )
}

export default Cartitem;