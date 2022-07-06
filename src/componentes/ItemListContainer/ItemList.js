import { useEffect, useState,useContext } from 'react';
import '../Header/Navbar.css'
import ItemListContainer from './ItemListContainer';
import ItemCount from '../ItemCount'
import Spinner from '../Spinner/Spinner';
import { contexto } from "../CartContext/CartContext";

const ItemList = ()=>{
    const [timer, setTimer]= useState(false);

    useEffect(()=>{
        setTimer(true);
        setTimeout(() => {
            setTimer(false)
        }, 1000);
    },[]);

    return(<div>
        <ItemCount stock='10' initial='0' />
        {timer ? <Spinner/> : <ItemListContainer/>}
    </div>)
}

export default ItemList;

