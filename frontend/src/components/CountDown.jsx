// import { useState, useEffect } from "react";

// const CountDown = (days, hours, minutes, seconds) => {


//         // function Countdown(days, hours, minutes, seconds) {
//         // 👉 Apni target date yahan set karo

//         // const targetDate = new Date("2026-01-31T23:59:59").getTime();
//         const now = new Date().getTime();
//         const totalMilliseconds =
//             (days * 24 * 60 * 60 * 1000) +
//             (hours * 60 * 60 * 1000) +
//             (minutes * 60 * 1000) +
//             (seconds * 1000);
//         const targetDate = now + totalMilliseconds;



//         const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

//         useEffect(() => {
//             const interval = setInterval(() => {
//                 const now = new Date().getTime();
//                 const difference = targetDate - now;
//                 setTimeLeft(difference);

//                 if (difference <= 0) {
//                     clearInterval(interval);
//                 }
//             }, 1000);

//             return () => clearInterval(interval);
//         }, [targetDate]);

//         // 👉 Agar countdown khatam ho jaye
//         if (timeLeft <= 0) {
//             return <h2 style={{ textAlign: "center" }}>Countdown Finished!</h2>;
//         }

//         // 👉 Time calculations
//         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//             (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//         return (
//             <>
//                 <p className='text-center'> <span className='block'> Days </span> <span className='block font-bold text-2xl'>{days}</span></p>
//                 <p className='text-center'> <span className='block'> Hours </span> <span className='block font-bold text-2xl'>{hours}</span></p>
//                 <p className='text-center'> <span className='block'> Minutes </span> <span className='block font-bold text-2xl'>{minutes}</span></p>
//                 <p className='text-center'> <span className='block'> Seconds </span> <span className='block font-bold text-2xl'>{seconds}</span></p>
//             </>
//         );
//     }


// export default CountDown


import { useState, useEffect } from "react";

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
    <div className="countdown flex gap-6 ">
      <p className="text-center bg-white text-black h-16 w-16 rounded-full m-0 ">
        <span className="block font-bold text-base pt-2">{days}</span>
        <span className="block text-xs font-semibold">Days</span>
      </p>
      <p className="text-center bg-white text-black h-16 w-16 rounded-full m-0 ">
        <span className="block font-bold text-base pt-2">{hours}</span>
        <span className="block text-xs font-semibold">Hours</span>
      </p>
      <p className="text-center bg-white text-black h-16 w-16 rounded-full m-0 ">
        <span className="block font-bold text-base pt-2">{minutes}</span>
        <span className="block text-xs font-semibold">Minutes</span>
      </p>
      <p className="text-center bg-white text-black h-16 w-16 rounded-full m-0 ">
        <span className="block font-bold text-base pt-2">{seconds}</span>
        <span className="block text-xs font-semibold">Seconds</span>
      </p>
    </div>
  );
};

export default CountDown;
