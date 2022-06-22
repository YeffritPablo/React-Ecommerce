import React, {useState,useEffect} from 'react';
import Item from './Item';
const ItemList = ()=>{
    const [nombre, setNombre]= useState([]);
    console.log(nombre);
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=> res.json())
        .then((data)=>setNombre(data.results));
    },[]);
    return(
        <div>
            {nombre.map((nombre)=>(
        <Item key={nombre.id} data={nombre}/>
        ))}</div>
    );
};

export default ItemList;

