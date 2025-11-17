import React from 'react'

// https://dummyjson.com/products

import cardIMg from "../assets/img/cardimg.png"


const Card = () => {
    return (
        <div className='cardParent relative mr-10  '>
            <i class="fa-sharp fa-light fa-heart absolute right-3 top-3 p-2 bg-white rounded-full"></i>
            <i class="fa-sharp fa-light fa-eye absolute right-3 top-14 p-2 bg-white rounded-full"></i>
            <p className="px-3 py-1.5 text-xs rounded absolute left-4 top-2 bg-[var(--redColor)] text-white">-40%</p>
            <div className="cardImg bg-gray-100 py-14 ">
                <img src={cardIMg} alt="" className='mx-auto' />
            </div>
            <div className="cardDetails">
                <h4 className='text-base my-2'>HAVIT HV-G92 Gamepad</h4>
                <p className="text-[var(--redColor)] font-semibold my-2">$ 299</p>
                <p className='ratings flex items-center my-2'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>

                    <span className='ml-3'>(88)</span>
                </p>
            </div>
            
        </div>
    )
}

export default Card
