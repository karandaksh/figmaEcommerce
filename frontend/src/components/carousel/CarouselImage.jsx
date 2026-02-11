import React from 'react'
import { Link } from 'react-router';

const CarouselImage = ({ companyLogo, productName, productHeading, productLink, productPhoto }) => {
    return (
        <>
            <div className="bg-black text-white p-8 ">
                <div className='grid grid-cols-7 gap-4 bg-black text-white'>
                    <div className="col-span-3 px-16 pt-3 pb-3.5">
                        <div className="flex gap-4 items-center pb-4">
                            <img src={companyLogo} alt="" />
                            <span>{productName}</span>
                        </div>
                        <h1 className='text-5xl tracking-wider leading-14 font-semibold'>{productHeading}</h1>
                        <Link to={productLink} target="_blank" className='mt-8 block underline underline-offset-8'>
                            Shop Now <i className="fa-solid fa-arrow-right pl-2"></i>
                        </Link>
                    </div>
                    <div className="col-span-3 col-start-5">
                        <img src={productPhoto} className='ml-auto w-11/12 scale-125 overflow-hidden bottom-0' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarouselImage


//    <>
//             <div className="bg-black text-white p-8 ">
//                 <div className='grid grid-cols-7 gap-4 bg-black text-white'>
//                     <div className="col-span-3 px-16 pt-3 pb-3.5">
//                         <div className="flex gap-4 items-center pb-4">
//                             <img src="../../src/assets/img/apple_logo.png" alt="" />
//                             <span>iPhone 14 Series</span>
//                         </div>
//                         <h1 className='text-5xl tracking-wider leading-14 font-semibold'>Up to 10% off Voucher</h1>
//                         <Link to="www.apple.com" target="_blank" className='mt-8 block underline underline-offset-8'>
//                             Shop Now <i className="fa-solid fa-arrow-right pl-2"></i>
//                         </Link>
//                     </div>
//                     <div className="col-span-3 col-start-5">
//                         <img src="../../src/assets/img/iphone.png" className='ml-auto w-11/12 scale-125 overflow-hidden bottom-0' alt="" />
//                     </div>
//                 </div>
//             </div>
//         </>