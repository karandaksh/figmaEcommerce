import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Topbar = () => {
    const [lang, setLang] = useState('English');
    const [theme, setTheme] = useState("light");




    const handleChange = (event) => {
        setLang(event.target.value);
        console.log(event.target.value);

    }




      useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      } else {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
      }
    }, [theme])






    return (
        <>
            <div className='bg-black text-white text-sm py-4 md:px-20 dark:border-b '>
                <div className=" xl:container grid grid-cols-12 gap-4 mx-auto ">
                    <div className="AdHeading col-span-6 col-start-5">
                        <p className='inline-block'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <Link to="" className='font-bold ml-2 underline'>Shop Now</Link>
                    </div>

                    <div className="xl:w-4/5 ml-auto text-end col-span-2 flex items-center">


                        <div className="ml-auto mr-4">
                            <button onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")}>
                                {theme === "dark" ?
                                    <i className="fa-regular fa-moon"></i>
                                    :
                                    <i className="fa-solid fa-sun-bright"></i>
                                }
                            </button>
                        </div>


                        <select className='text-white px-2 py-1' id="language-select" name="language" value={lang} onChange={handleChange}>
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
