import React from 'react'

import truck from '../assets/img/deliveryServices.png';
import customerService from '../assets/img/customerService.png';
import money from '../assets/img/moneyBack.png';




const Details = () => {

    const detailsData = [
        {
            title: "FREE AND FAST DELIVERY",
            para: "Free delivery for all orders over $140",
            image: truck,
        },
        {
            title: "24/7 CUSTOMER SERVICE",
            para: "Friendly 24/7 customer support",
            image: customerService,
        },
        {
            title: "MONEY BACK GUARANTEE",
            para: "We reurn money within 30 days",
            image: money,
        },
    ]


    return (
        <div className="grid grid-cols-3 gap-4 py-30">
            {detailsData.map((item,index) => {
                return (
                    <div className="col-span-1" key={index}>
                        <div className="termCardParent text-center">
                            <img src={item.image} alt="" className='mx-auto mb-5'/>
                            <h4 className="text-xl mb-2 font-semibold">{item.title}</h4>
                            <p className="text-sm">{item.para}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Details
