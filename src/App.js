import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import './App.css';
import Navbar from './componentes/Header/Navbar';
import Item from  './componentes/ItemListContainer/Item';



function App() {
  return (
    <div className="App">
   <Navbar titulo='BaluShop'/>
        <h1>Mi Ecommerce</h1>
        <p>
          by Becker Pablo 
        </p>
        <ItemListContainer />
    </div>
    
  );
  
};

export default App;
