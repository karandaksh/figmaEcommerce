import React from 'react'
import SectionHeading from './SectionHeading'

import { useState, useEffect } from "react";
import Button from './Button';
import { useNavigate } from 'react-router';





function Countdown() {
    // 👉 Apni target date yahan set karo
    const targetDate = new Date("2025-12-31T23:59:59").getTime();

    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            setTimeLeft(difference);

            if (difference <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    // 👉 Agar countdown khatam ho jaye
    if (timeLeft <= 0) {
        return <h2 style={{ textAlign: "center" }}>Countdown Finished!</h2>;
    }

    // 👉 Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <>
            <p className='text-center'> <span className='block'> Days </span> <span className='block font-bold text-2xl'>{days}</span></p>
            <p className='text-center'> <span className='block'> Hours </span> <span className='block font-bold text-2xl'>{hours}</span></p>
            <p className='text-center'> <span className='block'> Minutes </span> <span className='block font-bold text-2xl'>{minutes}</span></p>
            <p className='text-center'> <span className='block'> Seconds </span> <span className='block font-bold text-2xl'>{seconds}</span></p>
        </>
    );
}







// const PageSection = (props) => {
//     return (
//         <>
//             <div className="pt-20 pb-10">
//                 <SectionHeading sectionType={props.sectionType} sectionHeading={props.sectionHeading} parentClass="flex justify-between w-1/5" >
//                 {props.Countdown ={false} ? <Countdown  /> :"" }
//                     {/* <Countdown  /> */}
//                 </SectionHeading>

//             </div>

//         </>
//     )
// }



const PageSection = ({ sectionType, sectionHeading, showCountdown = false, viewBtn = false, PageSecbtnText, PageSecbtnLink }) => {

    const navigate = useNavigate()

    const handleClickBtn = () => {
        navigate(PageSecbtnLink)
        console.log(PageSecbtnLink);

    }


    return (
        <div className={`pt-20 pb-10 ${viewBtn ? "flex justify-between items-end" : ""}`}>
            <SectionHeading
                sectionType={sectionType}
                sectionHeading={sectionHeading}
                parentClass="flex justify-between w-1/5"
            >
                {showCountdown && <Countdown />}
            </SectionHeading>

            {viewBtn && <Button btnText={PageSecbtnText} btnAlign="center" onClick={handleClickBtn} className="mt-10" />}

        </div>

    );
};



export default PageSection
