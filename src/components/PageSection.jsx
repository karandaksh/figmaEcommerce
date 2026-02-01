import { useState, useEffect } from "react";
import SectionHeading from './SectionHeading'
import Button from './Button';
import { useNavigate } from 'react-router';




const PageSection = ({ sectionType, sectionHeading, showCountdown = false, viewBtn = false, PageSecbtnText, PageSecbtnLink, countdowntime = false }) => {

    const navigate = useNavigate()

    const handleClickBtn = () => {
        navigate(PageSecbtnLink)
        console.log(PageSecbtnLink);

    }

    
    const CountDown = ({ targetDateStr }) => {
      // Convert the date string to timestamp
      const targetDate = new Date(targetDateStr).getTime();
    
      const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
    
      useEffect(() => {
        const interval = setInterval(() => {
          const now = Date.now();
          const difference = targetDate - now;
          setTimeLeft(difference);
    
          if (difference <= 0) {
            clearInterval(interval);
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [targetDate]);
    
      // If countdown finished
      if (timeLeft <= 0) {
        return <h2 style={{ textAlign: "center" }}>Countdown Finished!</h2>;
      }
    
      // Time calculations
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
      return (
        <div className="countdown flex gap-4 justify-center">
          <p className="text-center">
            <span className="block">Days</span>
            <span className="block font-bold text-2xl">{days}</span>
          </p>
          <p className="text-center">
            <span className="block">Hours</span>
            <span className="block font-bold text-2xl">{hours}</span>
          </p>
          <p className="text-center">
            <span className="block">Minutes</span>
            <span className="block font-bold text-2xl">{minutes}</span>
          </p>
          <p className="text-center">
            <span className="block">Seconds</span>
            <span className="block font-bold text-2xl">{seconds}</span>
          </p>
        </div>
      );
    };
    
    


    return (
        <div className={`pt-20 pb-10 ${viewBtn ? "flex justify-between items-end" : ""}`}>
            <SectionHeading
                sectionType={sectionType}
                sectionHeading={sectionHeading}
                parentClass="flex justify-between w-1/5"
            >
                {showCountdown && <CountDown targetDateStr={countdowntime} />}
            </SectionHeading>

            {viewBtn && <Button btnText={PageSecbtnText} btnAlign="center" onClick={handleClickBtn} className="mt-10" />}

        </div>

    );
};



export default PageSection
