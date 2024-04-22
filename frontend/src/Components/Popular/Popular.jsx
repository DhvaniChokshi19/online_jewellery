import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../Assests/data.js';
import Item from '../Item/Item.jsx';

export const Popular = () => {
  const [popularProducts,setPopularProducts]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/popular")
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])
  
  return (
    <div className='popular'>
        <h1>Popular</h1>
        <hr></hr>
        <div className='popular-items'>
         {popularProducts.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}old_price={item.old_price}/>
         })}   
        </div>
    </div>
  )
}
