import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { contexto } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
const Navbar = (props)=>{

    return (
        <header>
        <nav className='Navbar'>
          <ul className='d-flex flex justify-content-center'>
            <Link to='/' className='li'>Inicio</Link>
            <Link to='/productos' className='li'>Productos</Link>
            <Link to='/nosotros' className='li'>Nosotros</Link>
            <Link to='/contacto' className='li'>Contacto</Link>
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