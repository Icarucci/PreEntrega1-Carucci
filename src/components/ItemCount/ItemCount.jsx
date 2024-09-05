import { useState } from "react";

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="d-flex flex-column align-items-center pb-3">
            <div className="d-flex align-items-center mb-0">
                <button className="btn btn-outline-primary btn-sm me-2" onClick={decrement}>-</button>
                <h4 className="m-1">{quantity}</h4>
                <button className="btn btn-outline-primary btn-sm ms-2" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-dark btn-sm mt-1" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}




export default ItemCount;