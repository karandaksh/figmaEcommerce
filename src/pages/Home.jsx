import React from 'react'
import LeftSideLayout from '../components/LeftSideLayout'
import RightSideLAyout from '../components/RightSideLAyout'
import SectionHeading from '../components/SectionHeading'
import PageSection from '../components/PageSection'
import Card from '../components/Card'
import Slider from 'react-slick'

const Home = () => {





  let settings = {
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 4.5,
    pauseOnHover: true,
    // slidesToScroll: 1,
    centerMode: false,

    swipeToSlide: true,
    autoplay: false,
    speed: 1000, //animation speed of move
    autoplaySpeed: 30000, //time of slide stop
  };


  // let settings = {
  //   slidesToShow: 4.5,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   arrows: true,
  //   centerMode: false,
  //   cssEase: "linear",
  //   swipeToSlide: true,
  // }




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

          </div>


        </div>
      </div>

    </>
  )
}

export default Home
