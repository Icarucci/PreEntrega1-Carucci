import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({id, nombre, descripcion, precio, categoria, sexo, imagen, talle, color, stock, marca, material, sku}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, imagen
        }

        addItem(item, quantity)
    }

    return (
        <article className="card">
            <img className="img"src={imagen} alt={nombre} />
            <p className="card-precio">$ {precio}</p>
            <p className="card-text">{descripcion}</p>
            <p className="card-precio">Categoria: {categoria}</p>
            <p className="card-precio">Tipo: {sexo}</p>
            <p className="card-precio">Talles: {talle && talle.length > 0 ? talle.map((t, index) => (
                    <span key={index}>{t}{index < talle.length - 1 ? ', ' : ''}</span>
                )) : 'No disponible'}</p>
            <p className="card-precio">Colores: {color && color.length > 0 ? color.map((c, index) => (
                    <span key={index}>{c}{index < color.length - 1 ? ', ' : ''}</span>
                )) : 'No disponible'}</p>
            <p className="card-precio">Cantidad en stock: {stock}</p>
            <p className="card-precio">Marca: {marca}</p>
            <p className="card-precio">Material: {material}</p>
            <p className="card-precio">Código: {sku}</p>
            <div className="card-detalles">
                {
                    quantityAdded > 0 ? (
                        <div className="card-link">
                            <Link to='/cart' className="nav-link"> Terminar Compra </Link>
                        </div>
                        
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }

            </div>           
        </article>
    )

}


export default ItemDetail;