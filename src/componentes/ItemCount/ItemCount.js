
import '../Header/Navbar.css';
import  {useState} from "react";
const no = document.getElementById('si');
const si = document.getElementById('cajas');
const ItemCount =({stock,initial,onAdd})=>{
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

const algo=()=>{
    onAdd(si)
    setCount(0)
}
const eli=()=>{
    si.classList.add('nada')
    no.classList.remove('ok')
}


    return(
        <div>
            <div className='ok' id='si'>
                <button >Terminar la compra</button>
            </div>
        <div id='cajas' className='caja'>
            <p>Stock: {stocky}</p>
            <p>{count}</p>
            <div >
            <button  onClick={aumentador} className='btn btn-outline-danger'>Agregar</button>
            <button  onClick={sacar}  className='btn btn-outline-danger'>Sacar</button>
            </div>
            <button onClick= {eli} className='btn btn-outline-danger'>Agregar al carrito {count}</button>
        </div>
        </div>
    );
};

export default ItemCount;