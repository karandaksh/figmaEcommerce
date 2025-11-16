import React from 'react'

// https://dummyjson.com/products

import cardIMg from "../assets/img/cardimg.png"


const Card = () => {
    return (
        <div className='cardParent border relative mr-10  '>
            <i class="fa-sharp fa-light fa-heart absolute right-3 top-3 p-2 bg-white rounded-full"></i>
            <i class="fa-sharp fa-light fa-eye absolute right-3 top-14 p-2 bg-white rounded-full"></i>
            <div className="cardImg bg-gray-100 py-16 ">
                <img src={cardIMg} alt="" className='mx-auto' />
            </div>
            
        </div>
    )
}

export default Card
