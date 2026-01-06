import React from 'react'
import jbl from "../assets/img/jbl.png"
import CountDown from './CountDown'
import Button from './Button'


function handleBook(){
  alert("Buy Now Working");
}


const JBLCountDown = () => {
  return (
    <div className='jblBG text-white p-15'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="col-span-1">
          <p className="text-green-500 font-semibold">Categories</p>
          <h4 className="text-5xl font-bold pr-10 my-7">Enhance Your <br /> Music Experience</h4>
          <div className="CountDownParent my-7">
            <CountDown targetDateStr="31 Jan 2026 8:00 PM" ></CountDown>
          </div>
            <Button  btnAlign="start" className="bg-[#00FF66] px-15" onClick={handleBook} btnText="Buy Now" />
        </div>
        <div className="col-span-1">
          <img src={jbl} alt="" />
        </div>
      </div>
    </div>
  )
}

export default JBLCountDown
