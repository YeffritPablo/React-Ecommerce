import { useEffect, useState } from 'react';
import '../Header/Navbar.css'
import ItemListContainer from './ItemListContainer';
import ItemCount from '../ItemCount'
import Spinner from '../Spinner/Spinner';

/*const ItemList = ()=>{
    const [nombre, setNombre]= useState([]);

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=> res.json())
        .then((data)=>setNombre(data.results));
    },[]);
    return(
        <div className='flex-wrap d-flex justify-content-center'>
            {nombre.map((nombre)=>(
        <Item key={nombre.id} data={nombre}/>
        ))}</div>
    );
};*//*
const ItemListContainer= ()=>{

    const [timer, setTimer]= useState(false);
    useEffect(()=>{
        setTimer(true);
        setTimeout(() => {
            setTimer(false)
        }, 1000);
    },[]);

    return(
        <div>
        <ItemCount stock='10' initial='0' onAdd='0'/>
        {timer ? <Spinner/> : <ItemList/>}
        </div>
    )
}*/
const ItemList = ()=>{
    const [timer, setTimer]= useState(false);

    useEffect(()=>{
        setTimer(true);
        setTimeout(() => {
            setTimer(false)
        }, 1000);
    },[]);

    return(<div>
        <ItemCount stock='10' initial='0' onAdd='0'/>
        {timer ? <Spinner/> : <ItemListContainer/>}
    </div>)
}

export default ItemList;

