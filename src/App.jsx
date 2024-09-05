import { Nav }  from "./components/NavBar/NavBar";
import ItemListContainer  from "./components/ItemListContainer/ItemListContainer";
import "./components/Item/Item.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App(){

    return <div>
       
        <Nav>

        </Nav>
        <ItemListContainer greeting="¡Bienvenido a FCamisetas!"></ItemListContainer>
        <ItemDetailContainer/>
    </div>
}

export default App;