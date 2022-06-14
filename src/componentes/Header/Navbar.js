import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
const Navbar = (props)=>{
  console.log(props)
    return (
        <header>
        <nav className='Navbar'>
          <ul className='Navbar-nav'>
            <li><a href='../index.html'>Inicio</a></li>
            <li><a  href='../index.html'>Nosotros</a></li>
            <li><a  href='../index.html'>Productos</a></li>
            <li><a  href='../index.html'>Contacto</a></li>
          </ul>
          <div className='d-flex flex-row align-items-center justify-content-between' >
            <h1>{props.titulo}</h1>
            <button className='bg-dark'><CartWidget/></button>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;