import React, { useEffect, useState } from 'react'
import LeftSideLayout from '../components/LeftSideLayout'
import RightSideLAyout from '../components/RightSideLAyout'
import SectionHeading from '../components/SectionHeading'
import PageSection from '../components/PageSection'
import Card from '../components/Card'
import Slider from 'react-slick'
import { Link } from 'react-router'
import Button from '../components/Button'

import { useNavigate } from 'react-router'
import { categoryimages } from "../components/categoryImages";
// import Category from '../Trash/Category_Trash'
import Category from '../components/Category'
import JBLCountDown from '../components/JBLCountDown'






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


  const navigateLink = useNavigate();


  // const categoriesData = [
  //   { CategoryId: "Cat_1", CategoryName: "Phones", CategoryLink: "https://www.google.com", CategoryImg: categoryimages.phone },
  //   { CategoryId: "Cat_2", CategoryName: "Computers", CategoryLink: "https://www.google.com", CategoryImg: categoryimages.phone },
  //   { CategoryId: "Cat_3", CategoryName: "SmartWacth", CategoryLink: "https://www.google.com", CategoryImg: categoryimages.phone },
  //   { CategoryId: "Cat_4", CategoryName: "Camera", CategoryLink: "https://www.google.com", CategoryImg: categoryimages.phone },
  //   { CategoryId: "Cat_4", CategoryName: "HeadPhones", CategoryLink: "https://www.google.com", CategoryImg: categoryimages.phone },
  //   { CategoryId: "Cat_4", CategoryName: "Gaming", CategoryLink: "https://www.google.com", CategoryImg: categoryimages.phone },
  // ]

  const categoriesData = [
    { CategoryId: "Cat_1", CategoryName: "Phones", CategoryImg: categoryimages.phone, CategoryLink: "category/Phones", },
    { CategoryId: "Cat_2", CategoryName: "Computers", CategoryImg: categoryimages.computer, CategoryLink: "category/Computers", },
    { CategoryId: "Cat_3", CategoryName: "SmartWatch", CategoryImg: categoryimages.smartwatch, CategoryLink: "category/SmartWatch", },
    { CategoryId: "Cat_4", CategoryName: "Camera", CategoryImg: categoryimages.camera, CategoryLink: "category/Camera", },
    { CategoryId: "Cat_5", CategoryName: "HeadPhones", CategoryImg: categoryimages.headphone, CategoryLink: "category/HeadPhones", },
    { CategoryId: "Cat_6", CategoryName: "Gaming", CategoryImg: categoryimages.games, CategoryLink: "category/Gaming", },
    { CategoryId: "Cat_5", CategoryName: "HeadPhones", CategoryImg: categoryimages.headphone, CategoryLink: "category/HeadPhones", },
    { CategoryId: "Cat_4", CategoryName: "Camera", CategoryImg: categoryimages.camera, CategoryLink: "category/Camera", },
    { CategoryId: "Cat_3", CategoryName: "SmartWatch", CategoryImg: categoryimages.smartwatch, CategoryLink: "category/SmartWatch", },
  ];









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



  function getOriginalPrice(disCountPercent, afterdisCountPrice) {
    const originalPrice = afterdisCountPrice / (1 - disCountPercent / 100)
    return originalPrice.toFixed(2);
  }


  // function removeextradiv() {
  //   const PrentElement = document.querySelector(".cardParent");
  //   if (!PrentElement) return
  //   else {
  //     let parent = PrentElement.parentElement
  //     if (parent.classList.contains("slick-slide")) return
  //     parent.replaceWith(PrentElement);
  //   }
  // }



  // function removeextradiv() {
  //   const parentElements = document.querySelectorAll(".cardParent");

  //   parentElements.forEach(el => {
  //     let parent = el.parentElement;
  //     if (!parent) return;
  //     if (parent.classList.contains("slick-slide")) return;
  //     parent.replaceWith(el);
  //   });
  // }








  let settings = {
    dots: false,
    // infinite: true,
    infinite: false,
    arrows: true,
    slidesToShow: 4.5,
    pauseOnHover: false,
    centerMode: false,
    swipeToSlide: true,
    autoplay: false,
    speed: 1000, //animation speed of move
    autoplaySpeed: 30000, //time of slide stop
  };

  // removeextradiv()



  // function HandleAddToCart(id) {
  //   console.log("Add to cart clicked for product id:", id);
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

          <PageSection sectionType="Today's" sectionHeading="Flash Sales" showCountdown={true} viewBtn={false} countdowntime="31 Jan 2026 8:00 PM" />
          <div className='card_slider'>
            <Slider {...settings}>
              {
                show.map((product) => (

                  <Card id={product.id} cardDiscountPercentage={product.discountPercentage} cardIMg={product.images[0]} cardTitle={product.title} cardPrice={product.price} cardOriginalPrice={getOriginalPrice(product.discountPercentage, product.price)} cardReview={product.reviews.length} onAddToCart={(id) => (id)} onCardClick={(id) => (console.log("On cart clicked :", id))} />

                ))
              }
              {show.length < AllCardData.length &&
                <Button btnText="Load More" className="mx-auto text-center cardParent_btn " onClick={LoadData} />
              }

            </Slider>

          </div>
          <Button btnText="View All Product" btnAlign="center" onClick={() => navigateLink("/AllProducts")} className="mt-10" />

          <div className="border-b mt-14 border-gray-400"></div>

          {/* First Section Complete There */}



          <PageSection sectionType="Categories" sectionHeading="Browse By Category" />



          {/* <div className="grid grid-cols-6 gap-8"> */}
          <Slider {...settings} slidesToShow={6} infinite={true} >


            {categoriesData.map((catdata) => (
              <Category CategoryImg={catdata.CategoryImg} CategoryName={catdata.CategoryName} CategoryLink={catdata.CategoryLink} CategoryId={catdata.CategoryId} />
            ))}


          </Slider>

          <div className="border-b mt-14 border-gray-400"></div>
          {/* </div> */}





          <PageSection sectionType="This Month" sectionHeading="Best Selling Products" viewBtn={true} PageSecbtnText="View All" PageSecbtnLink="/about" />


          <Slider slidesToShow={4} infinite={false}>
            {
              show.map((product) => (

                <Card id={product.id} cardDiscountPercentage={product.discountPercentage} cardIMg={product.images[0]} cardTitle={product.title} cardPrice={product.price} cardOriginalPrice={getOriginalPrice(product.discountPercentage, product.price)} cardReview={product.reviews.length} onAddToCart={(id) => (id)} onCardClick={(id) => (console.log("On cart clicked :", id))} />

              ))
            }
            {show.length < AllCardData.length &&
              <Button btnText="Load More" className="mx-auto text-center cardParent_btn " onClick={LoadData} />
            }

          </Slider>

          <JBLCountDown/>




        </div>
      </div>

    </>
  )
}

export default Home
