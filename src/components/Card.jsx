import React from 'react';

const Card = (props) => {

    return (
        <div className="cardParent mr-10 mb-5" id={props.id}>
            {/* <div className="cardParent relative mr-10 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 ease-in-out hover:rounded-xl mb-5"> */}

            <div className="cardImg bg-gray-100 relative overflow-hidden tran ">
                <i className="fa-sharp fa-light fa-heart absolute right-3 top-3 p-2 bg-white rounded-full"></i>
                <i className="fa-sharp fa-light fa-eye absolute right-3 top-14 p-2 bg-white rounded-full"></i>
                <p className="px-3 py-1.5 text-xs rounded absolute left-4 top-2 bg-[var(--redColor)] text-white">{Math.round(props.cardDiscountPercentage)} %</p>
                <img src={props.cardIMg} alt="" className='mx-auto' />
                <button className='AddToCart py-2.5 bg-black w-full cursor-pointer text-white rounded-b absolute -bottom-20 ' onClick={() => { console.log("Working Add to Card") }}>Add To Cart </button>
            </div>

            <div className="cardDetails px-3">
                <h4 className='text-base my-2'>{props.cardTitle}</h4>
                <div className="flex items-center">
                    <p className="text-[var(--redColor)] font-semibold my-2">$ {props.cardPrice}</p>
                    <p className="text-gray-600 font-semibold my-2 line-through ml-3.5">$ {props.cardOriginalPrice || props.cardPrice}</p>
                </div>
                <p className='ratings flex items-center my-2 pb-2.5'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                    <span className='ml-3'>({props.cardReview})</span>
                </p>
            </div>
        </div>
    )
}


export default Card
