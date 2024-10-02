import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../api";
import "../Item/Item.css";
import { useParams } from "react-router-dom";



const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts 

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    



    return (
        <div>
            <h1>{greeting}</h1>
            {
                products.length > 0 ?
                <ItemList className="image-list-container" products={products}/>
                : <span class="loader"></span>
            }

        </div>
    )
}

export default ItemListContainer;