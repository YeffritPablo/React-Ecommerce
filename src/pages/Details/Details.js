import React from 'react';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import '../../componentes/ItemDetail/ItemDetail.css';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';


export const Details = () => {
  const [detalle,setDetalle]= useState([]);
  let {id} =useParams();
  console.log(id)
  useEffect(()=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res)=>setDetalle(res.data)
    );
  },[id]);

  return (
    <div>
          <div key={detalle.id}>
            <ItemDetail data={detalle}/>
          </div>
      </div>
  )
}




export default Details