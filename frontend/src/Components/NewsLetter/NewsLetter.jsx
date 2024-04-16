import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Are you on the list?</h1>
        <p>Join to get exclusive offers & discounts</p>
        <div>
          <input type="email"  placeholder="abc@gmail.com">
          </input>
          <button>Join</button>
        </div>
    </div>
  )
}
