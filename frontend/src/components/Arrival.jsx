import React from 'react'

import play from '../assets/img/playstation.png'
import women from '../assets/img/womenCollection.png'
import speaker from '../assets/img/speaker.png'
import perfume from '../assets/img/gucciPerfume.png'


const Arrival = ({ CardBg, CardContent, CardTitle, CardDetail, CardButton }) => {
    return (
        <div className='grid grid-cols-2 gap-6'>

            <div className="col-span-1">
                <div className="arrivalCard relative bg-[#0d0d0d] text-center" >
                    <img src={play} alt="playstation" className='mx-auto pt-20' />
                    <div className="absolute h-full w-full top-0 z-10">
                        <div className="content w-2/5 text-left absolute bottom-8 left-8 text-white">
                            <h4 className='text-2xl'>PlayStation 5</h4>
                            <p className='text-sm py-2.5'>Black and White version of the PS5 coming out on sale.</p>
                            <button className=' bg-transparent border-b-2 border-white'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-1">

                <div className="arrivalCard relative bg-[#0d0d0d] text-center" >
                    <img src={women} alt="playstation" className='ml-auto' />
                    <div className="absolute h-full w-full top-0 z-10">
                        <div className="content w-2/5 text-left absolute bottom-8 left-8 text-white">
                            <h4 className='text-2xl'>Women’s Collections</h4>
                            <p className='text-sm pr-10 py-2.5'>Featured woman collections that give you another vibe.</p>
                            <button className=' bg-transparent border-b-2 border-white'>Shop Now</button>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-6 grid-flow-row mt-6">
                    <div className="col-span-1">

                        <div className="arrivalCard relative bg-[#0d0d0d] text-center" >
                            <img src={speaker} alt="playstation" className='mx-auto pt-16' />
                            <div className="absolute h-full w-full top-0 z-10">
                                <div className="content text-left absolute bottom-8 left-8 text-white">
                                    <h4 className='text-2xl'>Speakers</h4>
                                    <p className='text-sm py-2.5'>Amazon wireless speakers</p>
                                    <button className=' bg-transparent border-b-2 border-white'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">

                        <div className="arrivalCard relative bg-[#0d0d0d] text-center" >
                            <img src={perfume} alt="playstation" className='mx-auto pt-16' />
                            <div className="absolute h-full w-full top-0 z-10">
                                <div className="content text-left absolute bottom-8 left-8 text-white">
                                    <h4 className='text-2xl'>Perfume</h4>
                                    <p className='text-sm py-2.5'>GUCCI INTENSE OUD EDP</p>
                                    <button className=' bg-transparent border-b-2 border-white'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Arrival
