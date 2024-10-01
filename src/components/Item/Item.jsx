import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, nombre, descripcion, precio, categoria, sexo, imagen, talle, color, stock, marca, material, sku}) => {


    return (
        <article className="card">
            <img className="img"src={imagen} alt={nombre} />
            <p className="card-precio">$ {precio}</p>
            <p className="card-text">{descripcion}</p>
            <div className="card-detalles">
            <Link to={`/item/${id}`} className="card-link">Ver detalles</Link>
            </div>            
        </article>
    )

}


export default Item;