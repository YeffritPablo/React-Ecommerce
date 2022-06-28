/*import React from 'react'
import ItemList from '../../componentes/ItemListContainer/ItemList'
const Productos = () => {
  return (
    <div><ItemList/></div>
  )
}

export default Productos*/
import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetailContainer from '../../componentes/ItemDetailContainer/ItemDetailContainer'
import Spinner from '../../componentes/Spinner/Spinner';
import Category from '../../componentes/Categoria/Category';
const Productos = () => {
  const [timer, setTimer]= useState(false);

  useEffect(()=>{
      setTimer(true);
      setTimeout(() => {
          setTimer(false)
      }, 500);
  },[]);
  return (

    <div>
      <Category/> 
      {timer ? <Spinner/> :<ItemDetailContainer/> }</div>
  )
}

export default  Productos