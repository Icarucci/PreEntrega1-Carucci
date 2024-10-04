import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
/* Usando Mockapi
import { getProductsById } from "../../api";
*/
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    /* Con Mockapi

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
    },[itemId])

    */

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "productos", itemId);

        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    setProduct(null);
                }
            })
            .catch((error) => {
                console.error("Error fetch:", error);
            });
    }, [itemId]);
    

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

