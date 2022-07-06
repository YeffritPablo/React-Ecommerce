import { contexto } from "../CartContext/CartContext";
import { useContext, useState } from 'react';

const CartWidget = ()=>{
    
    const[carro, setCarro]= useState([])
    return (
        <div className='carrito'>
            <i className="text-primary bi bi-cart"></i>
        </div>
    )
}


export default CartWidget;