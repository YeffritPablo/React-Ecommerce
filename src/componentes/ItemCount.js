
import '../componentes/Header/Navbar.css';
import React, {useState} from "react";

const ItemCount =({stock,initial,onAdd})=>{
    const [count,setCount] = useState(0);
const aumentador =()=>{
    if(count >= initial && count< stock ){
        setCount(count + 1)
    }else{
        alert('No te pases del stock  ')
    }
}
const sacar =()=>{
    if(count<=stock && count > initial ){
        setCount(count - 1);
    }
}

const agregar = ()=>{
    if (onAdd < count){
        setCount(0);
    }
}

    return(
        <div>
            <p>Stock: {stock}</p>
            <p>{count}</p>
            <div >
            <button  onClick={aumentador}>Agregar</button>
            <button  onClick={sacar}>Sacar</button>
            </div>
            <button onClick= {agregar}>Agregar al carrito {count}</button>
           
        </div>
    );
};

export default ItemCount;