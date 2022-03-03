import React from 'react'
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard';
import AlltestimonialCards from './Dynamicdata/AlltestimonialCards';

const TestimonialSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
               slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
               slidesToShow: 1,
              }
             }
          ]
      };
  return (
    <>  
        <Slider {...settings}>
            { AlltestimonialCards.map( (yehiElement)=> {
                return(
                    <TestimonialCard key={yehiElement.id} id={yehiElement.id} title={yehiElement.title} image={yehiElement.image} description={yehiElement.description} designation={yehiElement.designation}/>
                )
            } ) }
        </Slider>    
    </>
  )
}

export default TestimonialSlider