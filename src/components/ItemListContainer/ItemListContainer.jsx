import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
/*Para Mockapi
import { getProducts, getProductsByCategory } from "../../api";
*/
import "../Item/Item.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, } from "firebase/firestore";



const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    /*Utiliza productos de mockapi

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
    }, [categoryId])                              */
    
    /* Acá utilizo firestore     */ 

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        getDocs(itemsCollection)
        .then((snapshot) => {
            const allProducts = snapshot.docs.map((doc) => ({id: doc.id,...doc.data(),}));
            
            const filteredProducts = categoryId ? allProducts.filter(prod => 
                    Object.values(prod).some(prop => 
                        typeof prop === 'string' && prop.toLowerCase().includes(categoryId.toLowerCase())
                    )
                ) 
                : allProducts;

            setProducts(filteredProducts);
        });

}, [categoryId]);

    return (
        <div>
            <h1>{greeting}{categoryId && ` / ${categoryId.toUpperCase()}`}</h1>
            {
                products.length > 0 ?
                <ItemList className="image-list-container" products={products}/>
                : <span className="loader"></span>
            }

        </div>
    )
}

export default ItemListContainer;