import { Nav }  from "./components/NavBar/NavBar";
import ItemListContainer  from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/Home";



function App(){

    return(

    <div>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/camisetas" element={<ItemListContainer greeting="Todas nuestras camisetas"></ItemListContainer>}/>
                <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Las mejores camisetas estan acá"></ItemListContainer>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h1>404 Página no encontrada</h1>}/>
            </Routes>
        </BrowserRouter>
       
        
        

    </div>
    )
}

export default App;