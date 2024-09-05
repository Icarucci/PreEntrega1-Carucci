import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductsById } from "../../api";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById('1')
            .then(response => {
                setProduct(response)
            })
    },[])

    return(
        <div className="image-list">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;