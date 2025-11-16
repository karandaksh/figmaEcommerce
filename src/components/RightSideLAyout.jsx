import React from 'react'
import Slider from "react-slick";
import CarouselImage from './carousel/CarouselImage';


const RightSideLAyout = () => {

  
  
  
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700, //animation speed of move
    autoplaySpeed: 2500, //time of slide stop
  };




  const CaruselData = [
    {
      companyLogo: "../../src/assets/img/apple_logo.png",
      productName: "iPhone 14 Series",
      productHeading: "Up to 10% off Voucher",
      productLink: "https://www.apple.in",
      productPhoto: "../../src/assets/img/iphone.png"
    },
    {
      companyLogo: "../../src/assets/img/apple_logo.png",
      productName: "iPhone 14 Series",
      productHeading: "Up to 10% off Voucher",
      productLink: "https://www.apple.in",
      productPhoto: "../../src/assets/img/iphone.png"
    },
    {
      companyLogo: "../../src/assets/img/apple_logo.png",
      productName: "iPhone 14 Series",
      productHeading: "Up to 10% off Voucher",
      productLink: "https://www.apple.in",
      productPhoto: "../../src/assets/img/iphone.png"
    },
  ];


  return (
    <Slider {...settings}>
      {CaruselData.map((carouselData) => (
        <CarouselImage companyLogo={carouselData.companyLogo} productName={carouselData.productName}
          productHeading={carouselData.productHeading} productLink={carouselData.productLink} productPhoto={carouselData.productPhoto} />
      ))}

    </Slider>
  );
}

export default RightSideLAyout
