import React from "react";
import { useEffect } from "react";
import Cta from "./Cta";
import UpworkReviewsCards from "./Dynamicdata/UpworkReviewsCards";
import SimpleBanner from "./SimpleBanner";
import UpworkCard from "./UpworkCard";
import Slider from "react-slick";
import TrustpilotCard from "./TrustpilotCard";
import TrustpilotReviewsCards from "./Dynamicdata/TrustpilotReviewsCards";

const Testimonial = (props) => {
  useEffect(() => {
    document.title = `Testimonial | WHMCS Digital`;
    props.setProgress(100);
    document.querySelector("header").className = "header_main inner_page";
    window.scrollTo(0, 0);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <SimpleBanner
        title="WHMCS Digital Testimonial"
        pagetitle="Testimonials"
      />

      {/* Upwork Reviews */}
      <section className="software testimonial_text review2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top_title">
                <h2 className="h2_style">
                  Upwork Reviews
                  <a
                    href="https://www.upwork.com/ag/610weblab/"
                    className="default_btn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Read More
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="row ReviewsSlider row-40">
            <Slider {...settings}>
              {UpworkReviewsCards.map((yehiElement) => {
                return (
                  <UpworkCard
                    id={yehiElement.id}
                    title={yehiElement.title}
                    image={yehiElement.image}
                    description={yehiElement.description}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      {/* Trustpilot reviews */}
      <section className="software testimonial_text">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top_title">
                <h2 className="h2_style">
                  Trustpilot reviews
                  <a
                    href="https://www.trustpilot.com/review/whmcsdigital.com"
                    className="default_btn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Read More
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="ReviewsSlider row-40">
            <Slider {...settings}>
              {TrustpilotReviewsCards.map((yehiElement) => {
                return (
                  <TrustpilotCard
                    id={yehiElement.id}
                    title={yehiElement.title}
                    image={yehiElement.image}
                    description={yehiElement.description}
                    author={yehiElement.author}
                    reviewreadmore={yehiElement.reviewreadmore}
                    usereadmore={yehiElement.usereadmore}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="software testimonial_text">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top_title">
                <h2 className="h2_style">
                  Google Reviews
                  <a
                    href="https://goo.gl/maps/mLcAKrvf3J9v42YK6"
                    className="default_btn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Read More
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="row ReviewsSlider row-40">
            <Slider {...settings}>
              {UpworkReviewsCards.map((yehiElement) => {
                return (
                  <UpworkCard
                    id={yehiElement.id}
                    title={yehiElement.title}
                    image={yehiElement.image}
                    description={yehiElement.description}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      <Cta
        title="Start Growing With WHMCS Digital"
        description="With tools to make every part of your process more human and a support team excited to help you."
      />
    </>
  );
};

export default Testimonial;
