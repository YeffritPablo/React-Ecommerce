import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import './App.css';
import Navbar from './componentes/Header/Navbar';

/*fetch("https://rickandmortyapi.com/api/character")
.then((res)=> res.json())
.then((data)=> ()=>);*/

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
