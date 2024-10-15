import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Cartitem from "../cart/Cartitem";
import "./Checkout.css"
import { collection, getFirestore, addDoc } from "firebase/firestore";



 
const Checkout = () => {

    const { cart, removeItem, isInCart, clearCart} = useContext(CartContext)

    const totalSum = cart.reduce((acc, item) => acc + (item.quantity * item.precio), 0);

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        number: "",
    })

    const resetForm = () => {
        setBuyer({ name: "", email: "", number: "" });
    };

    const [error, setError] = useState({
        name: "",
        email: "",
        number: "",
    })

    const [orderId, setOrderId] = useState(null);

    
    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        const localError = {}
        if(!buyer.name){
            localError.name = "El nombre es obligatorio"
        }
        if(!buyer.email){
            localError.email = "El email es obligatorio"
        }
        if(!buyer.number){
            localError.number = "El teléfono es obligatorio"
        }

        if(Object.keys(localError).length === 0){

            addToCart()

        } else {
            setError(localError)
        }
    }
        
    const addToCart = () => {
        const db = getFirestore()
        const orderCollection = collection(db, "ordenes")
        const purchase = {
            buyer,
            items: cart,
            total: totalSum,
            date : new Date()
        }

        addDoc(orderCollection, purchase)
        .then((res) => {
            setOrderId(res.id)
            clearCart()
            resetForm()
        })
        .catch(err => console.log(err))
    }

    if (orderId) {
        
        return (
            <div className="compra-finalizada">
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu ID de compra es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    return(
        <div className="cart">
            <h1>Finaliza tu compra</h1>
            <div className="checkout">
                <form className="form" onSubmit={submit}>
                    <p>Contacto</p>
                    <label htmlFor="name">Ingrese nombre</label>
                    <input type="text" placeholder="Nombre" name="name" id="name" onChange={handleChange}/>
                    {
                        error.name && <span className="form-msjerror">{error.name}</span>
                    }
                    <label htmlFor="email">Ingrese su e-mail</label>
                    <input type="email" placeholder="Correo electrónico" name="email" id="email" onChange={handleChange}/>
                    {
                        error.email && <span className="form-msjerror">{error.email}</span>
                    }
                    <label htmlFor="number">Ingrese su teléfono</label>
                    <input type="number" placeholder="Teléfono" name="number" id="number" onChange={handleChange}/>
                    {
                        error.number && <span className="form-msjerror">{error.number}</span>
                    }
                </form>
                <div className="items-form">
                    <div>
                    {cart.map((item,id) => (
                        <Cartitem item={item} key={item.id} removeItem={removeItem} itemInCart={isInCart(item.id)}/>
                    )
                    )
                    }
                    </div>
                    <div className="totales-form">
                    <p>Total:</p>
                    <p>$ {Math.floor(totalSum)}</p>
                    </div>
                </div>                 
            </div>     
            <div className="finalizar-form">
                <button onClick={submit} className="boton-link-comprar">Pagar</button>
            </div>
        </div>
        )
}

export default Checkout;