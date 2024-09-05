import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({id, nombre, descripcion, precio, categoria, sexo, imagen, talle, color, stock, marca, material, sku}) => {


    return (
        <article className="card">
            <img className="img"src={imagen} alt={nombre} />
            <p className="card-precio">$ {precio}</p>
            <p className="card-text">{descripcion}</p>
            <p className="card-precio">{categoria}</p>
            <p className="card-precio">{sexo}</p>
            <p className="card-precio">Talle: {talle}</p>
            <p className="card-precio">Color: {color}</p>
            <p className="card-precio">Cantidad en stock: {stock}</p>
            <p className="card-precio">Marca: {marca}</p>
            <p className="card-precio">Material: {material}</p>
            <p className="card-precio">Código: {sku}</p>
            <div className="card-detalles">
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
            </div>           
            <button className="card-link">Comprar</button> 
        </article>
    )

}


export default ItemDetail;