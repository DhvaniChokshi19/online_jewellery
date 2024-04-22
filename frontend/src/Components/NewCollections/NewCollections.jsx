import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import { response } from 'express';
export const NewCollections = () => {
  const [new_collection,setNew_Collection]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_Collection(data));
  },[])


  return (
    <div className='new-collections'>NewCollections</div>
  )
}
