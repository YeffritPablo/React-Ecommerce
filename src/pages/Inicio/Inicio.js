import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetailContainer from '../../componentes/ItemDetailContainer/ItemDetailContainer'
import Spinner from '../../componentes/Spinner/Spinner';
const Inicio = () => {
  const [timer, setTimer]= useState(false);

  useEffect(()=>{
      setTimer(true);
      setTimeout(() => {
          setTimer(false)
      }, 500);
  },[]);
  return (
    <div> {timer ? <Spinner/> :<ItemDetailContainer/> }</div>
  )
}

export default Inicio