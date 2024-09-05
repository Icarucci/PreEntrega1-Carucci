import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({id, nombre, descripcion, precio, categoria, sexo, imagen, talle, color, stock, marca, material, sku}) => {


    return (
        <article className="card">
            <img className="img"src={imagen} alt={nombre} />
            <p className="card-precio">$ {precio}</p>
            <p className="card-text">{descripcion}</p>
            <div className="card-detalles">
            <button className="card-link">Ver detalles</button>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
            </div>            
        </article>
    )

}


export default Item;