import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from '../../componentes/Spinner/Spinner';

const Inicio = () => {
  const [timer, setTimer]= useState(false);

  useEffect(()=>{
      setTimer(true);
      setTimeout(() => {
          setTimer(false)
      }, 200);
  },[]);
  return (
    <div> {timer ? <Spinner/> : null }</div>
  )
}

export default Inicio