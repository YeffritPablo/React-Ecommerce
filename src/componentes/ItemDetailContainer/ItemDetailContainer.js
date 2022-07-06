import { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'
import Item from '../ItemListContainer/Item';
import CartWidget from '../CartWidget/CartWidget';
const ItemDetailContainer = ()=>{
    const [detail, setDetail]= useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=> res.json())
        .then((data)=>setDetail(data.results));
    },[]);
    return(
    <div className='flex-wrap d-flex justify-content-center'>
        {detail.map((data)=>{
            return(
                <div key={data.id}>
                    <Link to={`/Details/${data.id}`}>
                         <Item data={data}/>
                         </Link> 
                    </div>
            )
        })}
    </div>)
};

export default ItemDetailContainer;