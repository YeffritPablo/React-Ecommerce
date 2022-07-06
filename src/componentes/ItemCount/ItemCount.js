
import '../Header/Navbar.css';
import  {useState, useContext} from "react";
import { contexto } from "../CartContext/CartContext";




const ItemCount =({stock,initial, data})=>{
    const [cont, setCont]= useContext(contexto);
    const [count,setCount] = useState(0);
    const [stocky, setStocky]= useState(stock)

        const aumentador =()=>{
    if(count >= initial && count< stock ){
        setCount(count + 1)
        setStocky(stocky - 1)

    }else{
        alert('No te pases del stock ')
    }
}
const sacar =()=>{
    if(count<=stock && count > initial ){
        setCount(count - 1);
        setStocky(stocky + 1)
    }
}

const agregar = ()=>{
    if (initial < count){
        setCount(0);
        setStocky(stock)
    }
}




    return(
        <div>
            <div className='ok' >
                <button >Terminar la compra</button>
            </div>
        <div id='cajas' className='caja'>
            <p>Stock: {stocky}</p>
            <p>{count}</p>
            <div >
            <button  onClick={aumentador} className='btn btn-outline-danger'>Agregar</button>
            <button  onClick={sacar}  className='btn btn-outline-danger'>Sacar</button>
            </div>
            <button onClick={agregar} className='btn btn-outline-danger'>Agregar al carrito </button>
        </div>
        </div>
    );
};

export default ItemCount;