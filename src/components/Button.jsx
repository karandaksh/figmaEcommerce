import React from 'react'

const Button = ({ btnAlign, className, onClick, btnText }) => {
  return (

    <div className={`text-${btnAlign}`}>
      <button
        className={`bg-[var(--redColor)] text-white text-base px-9 py-3.5 rounded hover:opacity-70 inline-block cursor-pointer ${className}`}
        onClick={onClick || console.log("Working Button")} // forward the click event
      >
        {btnText}
      </button>
    </div>

  )
}


// const Button = (props) => {
//   return (
//     props.btnCenter ?
//       <div className='text-center'>
//         <button
//           className={`bg-[var(--redColor)] text-white text-base px-9 py-3.5 rounded hover:opacity-70 inline-block cursor-pointer ${props.className}`}
//           onClick={props.onClick || console.log("Working Button")} // forward the click event
//         >
//           {props.btnText}
//         </button>
//       </div>
//       :
//       <button
//         className={`bg-[var(--redColor)] text-white text-base px-9 py-3.5 rounded hover:opacity-70 inline-block cursor-pointer ${props.className}`}
//         onClick={props.onClick || console.log("Working Button")} // forward the click event
//       >
//         {props.btnText}
//       </button>
//   )
// }


export default Button
