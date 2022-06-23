
import React from 'react'
import './ItemDetail.css'

export const ItemDetail = ({data}) => {
  return (

    <div className='contenedor-item'>
    <div className="carta-info">
      <img className='rounded-pill' src={data.image} alt={data.name}></img>
      <div className="card-info">
        <h2>INFORMACION DE LA CARTA</h2>
      <h5 className="card-title">Nombre: {data.name}</h5>
      <p className="card-text">Especie: {data.species} </p>
      <p className="card-text">Genero: {data.gender} </p>
      <div className="btn btn-warning">Nro ID: {data.id}</div>
      </div>
    </div>
  </div>
  )
}

export default ItemDetail;

