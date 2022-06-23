import { useEffect, useState } from 'react';
import Item from './Item';
const ItemListContainer = ()=>{
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
};
/*
const ListItem= ()=>{

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


export default ItemListContainer ; 