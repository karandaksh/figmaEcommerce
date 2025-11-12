import React, { useState } from 'react'
import Topbar from './Topbar'
import { NavLink } from 'react-router'

const Header = () => {

    const [searchVal, setSearchVal] = useState("");
    const [favorite, setFavorite] = useState(false);

    const Search = () => {
        console.log("Working");
    }

    const handleSearch = (e) => {
        setSearchVal(e.target.value)
        console.log(searchVal);

    }






    const menus = [
        { id: 1, names: "Home", href: "/home" },
        { id: 2, names: "Contact", href: "/contact" },
        { id: 3, names: "About", href: "/about" },
        { id: 4, names: "Sign Up", href: "/signup" },

    ]




    return (
        <>
            <Topbar />
            <div className="md:px-20 border-b border-0">
                <div className="xl:container mx-auto ">
                    <div className="grid grid-cols-12 gap-4 py-6">
                        <div className="col-span-4">
                            <h3 className='text-2xl'>Exclusive</h3>
                        </div>
                        <div className="col-span-4">
                            <div className="flex ">
                                {
                                    menus.map((data) => {
                                        return (
                                            <NavLink key={data.id} className={({ isActive }) => `pr-8 mr-4 ${isActive ? "underline" : "text-black"}`} to={data.href} > {data.names}</NavLink>
                                            // <NavLink key={data.id} className={({ isActive }) => `pr-8 mr-4 ${isActive ? "underline" : "text-black"}`} to={data.href} onClick={({ isActive }) => isActive ? "underline text-red-500" : " text-green"}> {data.names}</NavLink>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-span-3 col-start-10">

                            <div className="flex justify-between items-center">
                                <div className="inline-flex relative items-center">
                                    <input id='Menusearch' name='Menusearch' type='text' className='Menusearch bg-gray-200 pl-6 pr-10 py-2 text-xs rounded' placeholder='What are you looking for?' value={searchVal} onChange={handleSearch} />
                                    <button onClick={Search} className='absolute end-0 pr-3 '>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                                <div className="favorite text-lg cursor-pointer" onClick={() => { setFavorite(!favorite) }} >
                                    {favorite ?(<i className="fa-solid fa-heart"></i> ) : (<i className="fa-sharp fa-regular fa-heart"></i>)}
                                </div>


                                {/* <i className="fa-sharp fa-regular fa-heart" onClick={({ isActive }) => isActive ? <i class="fa-sharp fa-regular fa-heart"></i> : <i class="fa-solid fa-heart"></i>}></i> */}
                                <div className="cart text-lg cursor-pointer"><i className="fa-sharp fa-light fa-cart-shopping"></i></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
