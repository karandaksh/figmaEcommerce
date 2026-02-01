import React, { useEffect, useState } from 'react'

import qr from "../assets/img/qr.png"
import appstore from "../assets/img/appstore.png"
import playstore from "../assets/img/playstore.png"
import facebookIcon from "../assets/img/facebookIcon.png"
import instagramIcon from "../assets/img/instagramIcon.png"
import linkedinIcon from "../assets/img/linkedinIcon.png"
import twitterIcon from "../assets/img/twitterIcon.png"



const Footer = () => {

  const [counter, setCounter] = useState(0);




  return (
    <>
      {/* Footer Component */}

      {/* <p className='text-center'> */}

      {/* <span>{counter}</span> */}

      {/* <button className='mx-4 px-4 py-2 border' onClick={() => setCounter(counter => counter >= 20 ? counter : counter + 1)}>plus</button> */}
      {/* <button className='mx-4 px-4 py-2 border' onClick={() => setCounter(counter => counter === 0 ? counter : counter - 1)}>minus</button> */}



      {/* <button className='mx-4 px-4 py-2 border' onClick={() => setCounter(prev => prev === 0 ? prev : prev-1)}>minus</button> */}
      {/* </p> */}


      <div className="md:px-20 text-white bg-black">
        <div className="xl:container mx-auto py-12">

          <div className="grid grid-cols-2 gap-12">

            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-4">

                <div className="col-span-1">
                  <h4 className='text-2xl font-semibold'>Exclusive</h4>
                  <h5 className='text-xl'>Subscribe</h5>
                  <p>Get 10% off your first order</p>
                </div>

                <div className="col-span-1">
                  <h5 className='text-xl'>Support</h5>
                  <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                  <p>exclusive@gmail.com</p>
                  <p>+88015-88888-9999</p>
                </div>

              </div>
            </div>

            <div className="col-span-1">

              <div className="grid grid-cols-3 gap-4">

                <div className="col-span-1">
                  <h5 className='text-xl'>Account</h5>
                  <p>My Account</p>
                  <p>Login / Register</p>
                  <p>Cart</p>
                  <p>Wishlist</p>
                  <p>Shop</p>
                </div>

                <div className="col-span-1">
                  <h5 className='text-xl'>Quick Link</h5>
                  <p>Privacy Policy</p>
                  <p>Terms Of Use</p>
                  <p>FAQ</p>
                  <p>Contact</p>
                </div>

                <div className="col-span-1">
                  <h5 className='text-xl'>Download App</h5>
                  <p className='text-xs pt-6 pb-4'>Save $3 with App New User Only</p>

                  <div className="flex items-center">
                    <div className="qricon pr-3">
                      <img src={qr} alt="" />
                    </div>
                    <div className="storesicon">
                      <img src={playstore} alt="" />
                      <img src={appstore} alt="" />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div >
      </div>


    </>
  )
}

export default Footer
