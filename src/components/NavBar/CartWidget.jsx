import Carrito from "./cart.png"

export const CartWidget = () =>{
    return <div className="text-center">
        <img src={Carrito} alt="Carrito" width="60" height="60" className="d-inline-block align-top" />
        <p>0</p>
    </div>
}