import React from 'react'
import { useEffect, useState, createContext } from 'react';

export const contexto = createContext()
/*const ItemDetailContainer = ()=>{
    const [detail, setDetail]= useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=> res.json())
        .then((data)=>setDetail(data.results));
    },[]);
}*/




export const CartContext = ({children}) => {
const [detail, setDetail]= useState([]);
const [cont,setCont]= useState()

useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((res)=> res.json())
    .then((data)=>setDetail(data.results));
},[]);

return( <contexto.Provider value={[detail, setDetail, cont, setCont]}>

{children}
</contexto.Provider>)
}
