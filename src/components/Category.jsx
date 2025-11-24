import React from 'react'
import { useNavigate } from 'react-router'

const Category = ({ CategoryImg, CategoryName, CategoryLink, CategoryId }) => {

    const navigate = useNavigate()

    const categoryClick = () => {
        CategoryLink ? navigate(`/${CategoryLink}`) : console.log(`You Are Click On ${CategoryName} Category`);
    }




    return (
        <>
            <div className="category cursor-pointer border rounded text-center mr-6 hover:bg-[var(--redColor)] duration-300 ease-in-out hover:border-white hover:text-white" onClick={categoryClick} id={CategoryId} >
                <img src={CategoryImg} alt="" className='category_img px-7 py-5 mx-auto' />
                <p className='mb-5'>{CategoryName}</p>
            </div>
        </>
    )
}

export default Category
