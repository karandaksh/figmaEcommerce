import React, { useState } from 'react'
import Card from './Card';




const DualCard = ({ product1, product2,  }) => {


    const getOriginalPrice = (discount, price) => {
        return Math.round(price / (1 - discount / 100));
    };




    return (
        <div className="sliderPrent">

            {product1 && (

                <Card
                    id={product1.id}
                    cardDiscountPercentage={product1.discountPercentage}
                    cardIMg={product1.images[0]}
                    cardTitle={product1.title}
                    cardPrice={product1.price}
                    cardOriginalPrice={getOriginalPrice(
                        product1.discountPercentage,
                        product1.price
                    )}
                    cardReview={product1.reviews.length}
                    onAddToCart={(id) => console.log("Add to cart:", id)}
                    onCardClick={(id) => console.log("Card clicked:", id)}
                />
            )}


            {product2 && (
                <Card
                    id={product2.id}
                    cardDiscountPercentage={product2.discountPercentage}
                    cardIMg={product2.images[0]}
                    cardTitle={product2.title}
                    cardPrice={product2.price}
                    cardOriginalPrice={getOriginalPrice(
                        product2.discountPercentage,
                        product2.price
                    )}
                    cardReview={product2.reviews.length}
                    onAddToCart={(id) => console.log("Add to cart:", id)}
                    onCardClick={(id) => console.log("Card clicked:", id)}
                />
            )}


        </div>
    )
}

export default DualCard
