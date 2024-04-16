import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews(12)
        </div>
        </div>
        <div className="descriptionbox-description">
            <p>
                began with the idea of bringing best to our clients great quality jewellery, the best designs and great customer service. A blend of classic elegance and contemporary sophistication which is achieved through our modern day designs with a touch of timelessness resulting in a sense of subtle luxury is what we strive for.
            </p>
            <p>
                timless | confidence | luxury
            </p>
        </div>
    </div>
  )
}
