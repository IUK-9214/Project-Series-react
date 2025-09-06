import React, { useState } from 'react'

import { FaStar } from 'react-icons/fa'
import './StarRatingstylesheet.css'

function StarRating({ noOfStar = 5 }) {

const [rating,setrating]=useState(0)
const [hover,sethover]=useState(0)


    function handleClick(getCurrentINxdex){
        setrating(getCurrentINxdex)
    }
    function handleMouseMove(getCurrentINxdex){
sethover(getCurrentINxdex)
    }
    function handleMouseLeave(){
sethover(rating)
    }
return(
    <div className='khan'>
        {[...Array(noOfStar)].map((_, index) => {
            index+=1
            return (

                   <FaStar
            key={index}
            onClick={() => handleClick(index)} 
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
          />
                
            )
        })}
    </div>
    
)
}

export default StarRating