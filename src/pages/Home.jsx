import React from 'react'
import LeftSideLayout from '../components/LeftSideLayout'
import RightSideLAyout from '../components/RightSideLAyout'
import SectionHeading from '../components/SectionHeading'
import PageSection from '../components/PageSection'
import Card from '../components/Card'
import Slider from 'react-slick'
import { Link } from 'react-router'
import Button from '../components/Button'




const Home = () => {

  let ApiUrl = 'https://dummyjson.com/products';

  let AllCardData = [];

  async function CardDatas() {
    try {
      let dataget = await fetch(ApiUrl);
      if (!dataget.ok) {
        throw Error("APi Error" + dataget.status)
      }
      let dataJson = await dataget.json()
      AllCardData = dataJson;
    }
    catch (err) {
      console.log("I Have A Error", err.message); 
    }
  }




  // const CardDatas = async () => {

  //   try {
  //     let data = await fetch(ApiUrl);
  //     if (!data.ok) throw Error("Api Not Working Properly" + res.status);
  //     return await data.json();
  //   }
  //   catch (err) {
  //     return { error: err.message }
  //   }
  // }



  // CardDatas().then(result => {
  //   if (result.error) {
  //     console.log("Error:", result.error);
  //   } else {
  //     console.log(result);
  //   }
  // });



  let settings = {
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 4.5,
    pauseOnHover: true,
    centerMode: false,
    swipeToSlide: true,
    autoplay: false,
    speed: 1000, //animation speed of move
    autoplaySpeed: 30000, //time of slide stop
  };


  return (
    <>

      <div className="md:px-20 ">
        <div className="xl:container mx-auto">
          <div className="grid grid-cols-6 gap-4 pb-20">
            <div className="col-span-1 border-r pt-10">
              <LeftSideLayout />
            </div>
            <div className="col-span-5 pt-10 pl-3 CarouselSection">
              <RightSideLAyout />
            </div>
          </div>

          <PageSection sectionType="Today's" sectionHeading="Flash Sales" />
          <div className='card_slider'>
            <Slider {...settings}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Slider>

            <div className="text-center mt-5">
              <Button btnText="View All Products" className="mx-auto text-center" onClick={CardDatas} />
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default Home
