import "./Cart.css";


const Cartitem = ({item}) => {

    const subtotal = item.quantity * item.precio;
        

    return(
        <div className="productos">
            <div className="producto">
            <img className="imagen" src={item.imagen} alt={item.nombre} />
            <p>{item.nombre}</p>
            </div>
            <div>
                <p>$ {item.precio}</p>
            </div>
            <div>
                <p>{item.quantity}</p>
            </div>
            <div>
                <p>$ {subtotal}</p>
            </div>
        </div>

    )
}

export default Cartitem;