import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, descripcion, precio, categoria, sexo, imagen, talle, color, stock, marca, material, descuento, sku }) => {

    const precioConDescuento = descuento === "outlet" ? Math.floor(precio * 0.9) : precio;

    return (
        <article className="card">                       
            {descuento === "outlet" && <span className="outlet">Outlet</span>}
            <div className="img-container">
                <img className="img" src={imagen} alt={nombre} />
            </div>
            {descuento === "outlet" ? (
                <div className="card-precio">
                    <span className="precio-tachado">$ {precio}</span>
                    <span>$ {precioConDescuento}</span>
                </div>
            ) : (
                <p className="card-precio">$ {precio}</p>
            )}
            <p className="card-text">{descripcion}</p>
            <div className="card-detalles">
                <Link to={`/item/${id}`} className="card-link">Ver detalles</Link>
            </div>            
        </article>
    )
}

export default Item;