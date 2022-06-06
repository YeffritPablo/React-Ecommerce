import './Navbar.css';
const Navbar = ()=>{
    return (
        <header>
        <nav className='Navbar'>
          <ul className='Navbar-nav'>
            <li><a>Inicio</a></li>
            <li><a>Nosotros</a></li>
            <li><a>Productos</a></li>
            <li><a>Contacto</a></li>
          </ul>
          <div>
            <h1>BaluShop</h1>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;