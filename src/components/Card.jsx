import React, { useState } from 'react';

const Card = ({ id, cardDiscountPercentage, cardIMg, cardTitle, cardOriginalPrice, cardPrice, cardReview, onAddToCart, onCardClick }) => {

    const [fav, setFav] = useState(false)

    const handleAddClick = (e) => {
        e.stopPropagation();
        onAddToCart(id);  // Now id is defined
        console.log("this is print on the Card.jsx HandleAddClick Function ", id);
    };

    const handleOnCardClick = (e) => {
        e.stopPropagation();
        onCardClick(id);  // Now id is defined
    };



    const AddToFav = (id) => {
        setFav((prev) => !prev)
        console.log(`fav ${id}`);

    }


    // const handleAddToFav = (e)=>{
    //     e.stopPropagation();
    //    (function AddToFav (){
    //         console.log(id);
    //     })();
    // }



    return (
        <div className="cardParent mr-10 mb-5" id={id} onClick={handleOnCardClick}>
            {/* <div className="cardParent relative mr-10 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 ease-in-out hover:rounded-xl mb-5"> */}

            <div className="cardImg bg-gray-100 relative overflow-hidden tran ">

                <button className='favoriteProduct' onClick={(e) => { e.stopPropagation(); AddToFav(id); }}>
                    {/* <i className="fa-notdog-duo fa-solid fa-heart absolute right-3 top-3 p-2 bg-white rounded-full"></i>  */}
                    {/* <i className={ fav ? `fa-sharp fa-light fa-heart absolute right-3 top-3 p-2 bg-white rounded-full`:`fa-notdog-duo fa-solid fa-heart absolute right-3 top-3 p-2 bg-white rounded-full`}></i>  */}
                    <i
                        className={`absolute right-3 top-3 p-2 bg-white rounded-full
                            ${fav ? "fa-solid fa-heart text-red-500" : "fa-light fa-heart"}`}
                    ></i>
                </button>


                {/* <button className='favoriteProduct' onClick={handleAddToFav}> <i className="fa-sharp fa-light fa-heart absolute right-3 top-3 p-2 bg-white rounded-full"></i> </button> */}
                <i className="fa-sharp fa-light fa-eye absolute right-3 top-14 p-2 bg-white rounded-full"></i>
                <p className="px-3 py-1.5 text-xs rounded absolute left-4 top-2 bg-(--redColor) text-white">{Math.round(cardDiscountPercentage)} %</p>
                <img src={cardIMg} alt="" className='mx-auto' />
                <button className='AddToCart py-2.5 bg-black w-full cursor-pointer text-white rounded-b absolute -bottom-20 ' onClick={handleAddClick}  >Add To Cart </button>
            </div>

            <div className="cardDetails px-3">
                <h4 className='text-base my-2'>{cardTitle}</h4>
                <div className="flex items-center">
                    <p className="text-(--redColor) font-semibold my-2">$ {cardPrice}</p>
                    <p className="text-gray-600 font-semibold my-2 line-through ml-3.5">$ {cardOriginalPrice || cardPrice}</p>
                </div>
                <p className='ratings flex items-center my-2 pb-2.5'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                    <span className='ml-3'>({cardReview})</span>
                </p>
            </div>
        </div>
    )
}


export default Card
