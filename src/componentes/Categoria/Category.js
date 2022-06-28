import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Item from '../ItemListContainer/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
const Category = ()=>{
  const apretar =()=>{
    
  };
  return(
    
    
<div>
  <Link  to={`/productos/categorias`}>
  <button className='btn bg-warning' onClick={apretar}>Humanos</button>
<button className='btn bg-warning'>Alien</button>
<div></div>
</Link>
</div>
)
}



export default Category;

/*
<button className='btn bg-warning'>Humanos</button>
<button className='btn bg-warning'>Alien</button>*/