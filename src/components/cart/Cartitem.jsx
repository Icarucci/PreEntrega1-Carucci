import "./Cart.css";


const Cartitem = ({item, removeItem, itemInCart}) => {

    
    const subtotal = item.quantity * item.precio;
        

    return(
        <div className="productos">
            <div className="producto">
            <img className="imagen" src={item.imagen} alt={item.nombre} />
            <p>{item.nombre}</p>
            </div>
            <div  className="precio">
                <p>$ {item.precio}</p>
            </div>
            <div  className="cantidad">
                <p>{item.quantity}</p>
            </div>
            <div  className="subtotal">
                <p>$ {subtotal}</p>
            </div>
            <div className="remove">
                <button onClick={() => removeItem(item.id)}>X</button>
                {itemInCart}
            </div>
        </div>

    )
}

export default Cartitem;