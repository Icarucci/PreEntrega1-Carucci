import { Nav }  from "./components/NavBar/NavBar";
import ItemListContainer  from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/Home";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";



function App(){

    return(

    <div>
        <BrowserRouter>
            <CartProvider>
                <Nav/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/camisetas" element={<ItemListContainer greeting="Todas nuestras camisetas"></ItemListContainer>}/>
                    <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Categorias"></ItemListContainer>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h1>404 Página no encontrada</h1>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    </div>
    )
}

export default App;