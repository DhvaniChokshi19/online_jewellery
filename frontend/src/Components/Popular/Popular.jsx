import React from 'react'
import './Popular.css'
import data_product from '../Assests/data.js';
import Item from '../Item/Item.jsx';

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular</h1>
        <hr></hr>
        <div className='popular-items'>
         {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}old_price={item.old_price}/>
         })}   
        </div>
    </div>
  )
}
