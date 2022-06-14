
import '../componentes/Header/Navbar.css';
import React, {useState} from "react";
const suma = document.querySelector('#sum')
const dec = document.querySelector('#dec')
const ItemCount =({img})=>{
    const [count,setCount] = useState(0);
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
}

    return(
        <div>
            <p>Mouse</p>
            <img src={img} alt="Raton"></img>
            <p>{count}</p>
            <button id="sum" onClick={aumentador}>aumentador</button>
            <button id="dec" onClick={sacar}>Sacar</button>
        </div>
    );
};

export default ItemCount;