import React from 'react'

const Button = (props) => {
  return (
    <button
      className={`bg-[var(--redColor)] text-white text-base px-9 py-3.5 rounded hover:opacity-70 inline-block cursor-pointer ${props.className}`}
      onClick={props.onClick} // forward the click event
    >
      {props.btnText}
    </button>
  )
}


export default Button
