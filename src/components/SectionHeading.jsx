import React from 'react'

const SectionHeading = ({ children, sectionType, sectionHeading, parentClass }) => {
    return (
        <>
            <div className={`sectionType items-end gap-16 ${children ? "flex" : ""}`}>
                <div className="sectionTitle">
                    <span className='bg-[var(--redColor)] p-2.5 rounded'></span>
                    <span className='pl-4 text-[#DB4444] text-base font-semibold'>
                        {sectionType}
                    </span>
                    <h1 className='text-4xl mt-6 font-semibold '>{sectionHeading}</h1>
                </div>

                {children && (
                    <div className={`${parentClass ? parentClass : ''}`}>
                        {children}
                    </div>
                )}

            </div>
        </>
    )
}

export default SectionHeading
