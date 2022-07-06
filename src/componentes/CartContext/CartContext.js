import React from 'react'
import { useEffect, useState, createContext, useParams} from 'react';
import axios from 'axios';

export const contexto = createContext()
/*const ItemDetailContainer = ()=>{
    const [detail, setDetail]= useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=> res.json())
        .then((data)=>setDetail(data.results));
    },[]);
}*/



/*
export const Carro = () => {
    const [carro,setCarro]= useState([]);
    let {id} =useParams();
    console.log(id)
    useEffect(()=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res)=>setCarro(res.data)
      );
    },[id]);
  
  console.log(carro)
  }
  
  export default Carro

*/
export const CartContext = ({children}) => {
const [detail, setDetail]= useState([]);
const [cont,setCont]= useState();
useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((res)=> res.json())
    .then((data)=>setDetail(data.results));
},[]);

return( <contexto.Provider value={[detail, setDetail, cont, setCont ]}>

{children}
</contexto.Provider>)
}
