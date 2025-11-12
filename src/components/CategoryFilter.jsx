import React, { useState } from 'react'
import { href, Link } from 'react-router'

const CategoryFilter = () => {

    //     const [openSubMenu, setOpenSubMenu] = useState(null)

    // const showSubMenu = (id) => {
    //         setOpenSubMenu((prev) => (prev === id ? null : id))
    //     }


  
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (id) => {
    setOpenSubMenu((prev) => (prev === id ? null : id));
  };



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


            {/* <div className="category-filter">
                {FilterMenu.map((menu) => (
                    <div key={menu.id} className="menu-item">
                        {menu.subMenu ? (
                            <div className="dropdown" id={menu.id} onClick={(e) => { showSubMenu(e.currentTarget.id) }} >
                                {menu.menuName}
                                <i className="fa-solid fa-arrow-right"></i>
                                <ul className={`submenu ${openSubMenu === menu.id ? "block" : "hidden"}`}>
                                    {menu.subMenu.map((sub) => (
                                        <li key={sub.id}>
                                            <Link href={sub.href}>{sub.subMenuName}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <Link href={menu.href}>{menu.menuName}</Link>
                        )}
                    </div>
                ))}
            </div> */}


            <div className="category-filter">
                {FilterMenu.map((menu) => (
                    <div key={menu.id} className="menu-item">
                        {menu.subMenu ? (
                            <>
                                {/* Only the header is clickable */}
                                <div
                                    className="menu-header"
                                    onClick={() => toggleSubMenu(menu.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {menu.menuName} <i className="fa-solid fa-arrow-right"></i>
                                </div>

                                {/* Submenu */}
                                <ul className={`submenu ${openSubMenu === menu.id ? "block" : "hidden"}`}>
                                    {menu.subMenu.map((sub) => (
                                        <li key={sub.id}>
                                            <Link href={sub.href}>{sub.subMenuName}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <Link href={menu.href}>{menu.menuName}</Link>
                        )}
                    </div>
                ))}
            </div>


        </>
    )
}

export default CategoryFilter
