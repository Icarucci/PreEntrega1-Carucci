import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductsById } from "../../api";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
    },[itemId])

    return(
        <div className="image-list">
            {
                product ?
                <ItemDetail {...product}/>
                : <span className="loader"></span>
            }

        </div>
    )
}

export default ItemDetailContainer;

