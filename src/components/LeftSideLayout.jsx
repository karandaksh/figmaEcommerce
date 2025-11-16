import React, { useState } from 'react'
import { href, Link } from 'react-router'

const LeftSideLayout = () => {


    const [openSubMenu, setOpenSubMenu] = useState(null);

    function ShowToggle(id) {
        setOpenSubMenu(openSubMenu === id ? null : id)
    }

    const FilterMenu = [
        {
            id: 1,
            menuName: "Woman’s Fashion",
            subMenu: [
                { id: 2, subMenuName: "Jeans", href: "/femalejeans" },
                { id: 3, subMenuName: "Top", href: "/top" },
                { id: 4, subMenuName: "Kurta", href: "/kurta" },
                { id: 5, subMenuName: "Sarees", href: "/sarees" },
            ],
        },
        {
            id: 6,
            menuName: "Men’s Fashion",
            subMenu: [
                { id: 7, subMenuName: "T-Shirt", href: "/tshirt" },
                { id: 8, subMenuName: "Jackets", href: "/jackets" },
                { id: 9, subMenuName: "Jeans", href: "/malejeans" },
                { id: 10, subMenuName: "Shirts", href: "/shirts" },
            ],
        },
        {
            id: 11,
            menuName: "Electronics",
            href: "/electronic",
        },
        {
            id: 12,
            menuName: "Home & Lifestyle",
            href: "/homelifestyle",
        },
        {
            id: 13,
            menuName: "Medicine",
            href: "/medicine",
        },
        {
            id: 14,
            menuName: "Sports & Outdoor",
            href: "/sports",
        },
        {
            id: 15,
            menuName: "Baby’s & Toys",
            href: "/babytoy",
        },
        {
            id: 16,
            menuName: "Groceries & Pets",
            href: "/groceries",
        },
        {
            id: 17,
            menuName: "Health & Beauty",
            href: "/healthbeauty",
        },
    ];

    return (

        <>

            <div className="category-filter">
                <ul>
                    {FilterMenu.map((menus) => (
                        <li key={menus.id} className='py-1 mb-1 pr-3'>
                            {menus.subMenu ? (
                                <span className="dropdownParent " id={menus.id} onClick={() => ShowToggle(menus.id)}>
                                    {menus.menuName}
                                    <i className="fa-solid fa-arrow-right pl-5"></i>
                                    <ul className={`dropdown list-disc pl-6 ${openSubMenu === menus.id ? "block" : "hidden"}`}>
                                        {menus.subMenu.map((subMenu) => (
                                            <li key={subMenu.id}>
                                                <Link to={subMenu.href} id={subMenu.id}>
                                                    {subMenu.subMenuName}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </span>
                            ) : (
                                <Link to={menus.href}>{menus.menuName}</Link>

                            )}
                        </li>
                    ))}
                </ul>
            </div>





        </>


    )
}


export default LeftSideLayout
