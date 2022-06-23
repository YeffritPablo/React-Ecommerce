
import './App.css';
/*IMPORTS DE RUTAS*/
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

/*IMPORTS COMPONENTES*/
import Navbar from './componentes/Header/Navbar';
//import ItemList from './componentes/ItemListContainer/ItemList';

/*IMPORTS PAGES*/
import Inicio from './pages/Inicio/Inicio';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';
import Productos from './pages/Productos/Productos';
import Details from './pages/Details/Details'

function App() {
  return (
    <Router>
    <div className="App">
   <Navbar titulo='BaluShop'/>
        <h1>Mi Ecommerce</h1>


        <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/Nosotros' element={<Nosotros/>}></Route>
        <Route path='/Contacto' element={<Contacto/>}></Route>
        <Route path='/Productos' element={<Productos/>}></Route>
        <Route path='/Details/:id' element={<Details/>}></Route>
      </Routes>
    </div>
 
    </Router>
    
  );
  
};

export default App;
