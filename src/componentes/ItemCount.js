
import '../componentes/Header/Navbar.css';
import React, {useState} from "react";
//const suma = document.querySelector('#sum')
//sconst dec = document.querySelector('#dec')
const ItemCount =({stock,initial})=>{
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
/*
    const aumentador =()=>{
       setCount(count + 1);
        if(count >= 9){

            suma.classList.toggle('none')
       
        }else if(count>=0){
            dec.classList.remove('none')
        }
    }

const sacar = ()=>{
    setCount(count - 1);
    if(count <= 1){
        dec.classList.toggle('none')
    }else if (count>=10){
        suma.classList.remove('none')
    }
}*/

    return(
        <div>
            <p>Stock: {stock}</p>
            <p>{count}</p>
            <button  onClick={aumentador}>Agregar</button>
            <button  onClick={sacar}>Sacar</button>
        </div>
    );
};

export default ItemCount;