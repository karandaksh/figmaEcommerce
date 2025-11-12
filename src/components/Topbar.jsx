import React, { useState } from 'react'
import { Link } from 'react-router'

const Topbar = () => {
    const [lang, setLang] = useState('English');
    const handleChange = (event) => {
        setLang(event.target.value)
        console.log(event.target.value);
        
    }
    return (
        <>
            <div className='bg-black text-white text-sm py-4 md:px-20 '>
                <div className=" xl:container grid grid-cols-12 gap-4 mx-auto ">
                    <div className="AdHeading col-span-6 col-start-5">
                        <p className='inline-block'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <Link to="" className='font-bold ml-2 underline'>Shop Now</Link>
                    </div>
                    <div className="xl:w-4/5 ml-auto text-end col-span-2">
                        <select className='text-white px-2 py-1 ml-auto' id="language-select" name="language" value={lang} onChange={handleChange}>
                            <option className='text-black' value="English">English</option>
                            <option className='text-black' value="Hindi">Hindi</option>
                            <option className='text-black' value="Urdu">Urdu</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
