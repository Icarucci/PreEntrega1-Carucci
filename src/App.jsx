import { Nav }  from "./components/NavBar/NavBar";
import ItemListContainer  from "./components/ItemListContainer/ItemListContainer";
import "./components/Item/Item.css";



function App(){

    return <div>
       
        <Nav>

        </Nav>
        <ItemListContainer greeting="¡Bienvenido a FCamisetas!"></ItemListContainer>
    </div>
}

export default App;