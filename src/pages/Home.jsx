import React, { useEffect, useState } from 'react'
import LeftSideLayout from '../components/LeftSideLayout'
import RightSideLAyout from '../components/RightSideLAyout'
import SectionHeading from '../components/SectionHeading'
import PageSection from '../components/PageSection'
import Card from '../components/Card'
import Slider from 'react-slick'
import { Link } from 'react-router'
import Button from '../components/Button'


// useEffect(() => {

//   async function CardDatas() {
//     try {
//       let dataget = await fetch(ApiUrl);
//       if (!dataget.ok) {
//         throw Error("APi Error" + dataget.status)
//       }
//       let dataJson = await dataget.json()
//       // AllCardData = dataJson.products;
//       // setAllCardData(dataJson.products)
//       setAllCardData(dataJson.products);

//       // setShow(AllCardData.slice(slimit,elimit))
//       setShow(dataJson.products.slice(slimit, elimit))

//       // dataJson.products.slice

//       console.log(show);
//       setSlimit(10)
//       setElimit(20)


//     }
//     catch (err) {
//       console.log("I Have A Error", err.message);
//     }
//   }
//   CardDatas()
// }, [])


// function LoadData() {
//   if (AllCardData.length > show.length) {

//     const nextItems = AllCardData.slice(slimit, elimit)

//     setShow((prev) => [...prev, ...nextItems])
//     setSlimit((prev) => (prev += 10));
//     setElimit((prev) => (prev += 10));

//     console.log("tnbifnbii", AllCardData.length, show.length );

//   }
// }





const Home = () => {

  const [slimit, setSlimit] = useState(0);
  const [show, setShow] = useState([]);
  const [elimit, setElimit] = useState(10);
  const [AllCardData, setAllCardData] = useState([]);

  let ApiUrl = 'https://dummyjson.com/products';

  useEffect(() => {
    async function CardData() {
      try {
        let data = await fetch(ApiUrl);
        if (!data.ok) {
          throw Error("Api Not Working Properly " + data.status);
        }
        let dataJson = await data.json();
        setShow(dataJson.products.slice(slimit, elimit));
        setAllCardData(dataJson.products);
      }
      catch (err) {
        console.error("Api Error :- " + err.message);
      }
    }
    CardData()
  }, [])


  function LoadData() {
    const nextSlimit = slimit + 10;
    const nextElimit = elimit + 10;

    if (nextSlimit <= AllCardData.length) {
      const nextBatch = AllCardData.slice(elimit, nextElimit);
      setShow(prev => [...prev, ...nextBatch]);
      setSlimit(nextSlimit);
      setElimit(nextElimit);
    }
    else {
      console.log("All Data Show ");
    }
  }




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


            {
              show.map((cdData) => (
                <div className='parentCardDiv' key={cdData.id}>
                  <p> {cdData.id} :-  {cdData.title}</p>
                </div>
              ))
            }


            <div className="text-center mt-5">
              <Button btnText="View All Products" className="mx-auto text-center" onClick={LoadData} />
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default Home
