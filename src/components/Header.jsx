import React from 'react'
import Topbar from './Topbar'
import { NavLink } from 'react-router'

const Header = () => {

    const menus = [
        { id: 1, names: "Home", href: "/home" },
        { id: 2, names: "Contact", href: "/contact" },
        { id: 3, names: "About", href: "/about" },
        { id: 4, names: "Sign Up", href: "/signup" },

    ]

    return (
        <>
            <Topbar />
            <div className="xl:container mx-auto">
                <div className="grid grid-cols-12 gap-4 py-4">
                    <div className="col-span-4">
                        <h3 className='text-2xl'>Exclusive</h3>
                    </div>
                    <div className="col-span-4">
                        <div className="flex ">
                            {
                                menus.map((data) => {
                                    return (
                                        // <NavLink key={data.id} className={`${({ isActive }) => isActive ? "underline text-red-500" : "text-black"} pr-8 mr-4`} to={data.href} onClick={({ isActive }) => isActive ? "underline text-red-500" : " text-green"}> {data.names}</NavLink>
                                        <NavLink key={data.id} className={({isActive})=>`pr-8 mr-4 ${isActive?"underline text-red-500":"text-black"}`} to={data.href} onClick={({ isActive }) => isActive ? "underline text-red-500" : " text-green"}> {data.names}</NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-span-3 col-start-10">serch</div>
                </div>
            </div>
        </>
    )
}

export default Header
