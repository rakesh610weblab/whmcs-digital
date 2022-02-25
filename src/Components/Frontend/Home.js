import React from "react";
import ContactusForm from "./ContactusForm";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Allcards from "./Dynamicdata/Allcards";
import Cta from "./Cta";
import TestimonialSlider from "./TestimonialSlider";
import Slider from "react-slick";

const Home = (props) => {
  useEffect(() => {
    document.title = `WHMCS Development Company - WHMCS Modules, Themes & Templates Solutions`;
    props.setProgress(100);
    document.querySelector("header").className = "header_main";
    window.scrollTo(0, 0);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <>
      {/* Banner Section */}
      <section className="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner_text">
                <h1>
                  <span>WHMCS Services </span> Get Everything Under One Roof!
                </h1>
                <p className="p_style">
                  Offering a broad spectrum of cutting-edge WHMCS services
                  across the world!
                </p>
                <div className="happy_client">
                  <div className="client_box">
                    <div className="media">
                      <div className="media-left">
                        <span className="icon icon-happy"></span>
                      </div>
                      <div className="media-body">
                        <h3>10k+</h3>
                        <p>Happy Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="client_box">
                    <div className="media">
                      <div className="media-left">
                        <span className="icon icon-add-group"></span>
                      </div>
                      <div className="media-body">
                        <h3>250+</h3>
                        <p>Valued Partner</p>
                      </div>
                    </div>
                  </div>
                  <div className="client_box">
                    <div className="media">
                      <div className="media-left">
                        <span className="icon icon-setting"></span>
                      </div>
                      <div className="media-body">
                        <h3>150+</h3>
                        <p>Skill Consultants</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="our_clients">
                  <span className="client_span">Technology We Use</span>
                  <div className="logo_outer">
                    <div className="our_logo">
                      <img
                        src="whmcs-digital/images/whmcs.png"
                        alt="WHMCS Development Company"
                      />
                    </div>
                    <div className="our_logo">
                      <img
                        src="whmcs-digital/images/cpanel.png"
                        alt="cPanel - WHMCS Development Company"
                      />
                    </div>
                    <div className="our_logo">
                      <img
                        src="whmcs-digital/images/laravel.png"
                        alt="Laravel - WHMCS Development Company"
                      />
                    </div>
                    <div className="our_logo">
                      <img
                        src="whmcs-digital/images/wordpress.png"
                        alt="Wordpress - WHMCS Development Company"
                      />
                    </div>
                    <div className="our_logo">
                      <img
                        src="whmcs-digital/images/magento.png"
                        alt="Magento - WHMCS Development Company"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner_form">
                <ContactusForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousle Section */}
      <section className="software home_software">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top_title">
                <div className="top_tag">
                  <span>Our Services</span>
                </div>
                <h2 className="h2_style">
                  Let Our WHMCS PROs Unlock the Power of WHMCS for You!
                </h2>
                <p className="p_style">
                  With a team of world-class WHMCS PROs, we offer you the best
                  WHMCS services covering everything from custom services to
                  modules development, theme customization, installation, to
                  upgradation, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="SoftwareSlider row-40">
          <Slider {...settings}>
            {Allcards.map((yehiElement) => {
              return (
                  <Card 
                    key={yehiElement.id}
                    id={yehiElement.id}
                    title={yehiElement.title}
                    image={yehiElement.image}
                    description={yehiElement.description}
                    readmorelink={yehiElement.readmorelink}
                  />
              );
            })}
            </Slider>
          </div>
          <div className="row">
            <div className="col-12 all_products">
              <Link to="/custom-whmcs-development">
                View our services
                <span className="icon icon-right-arrow"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="team_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="team_img">
                <img
                  src="whmcs-digital/images/team_img.webp"
                  alt="WHMCS Digital - WHMCS Development Company"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="team_text">
                <div className="top_tag">
                  <span>About Us</span>
                </div>
                <h2>
                  Hire a Squad of <span>WHMCS PROs</span>
                  <br></br>to Amplify Your Business Growth!
                </h2>
                <p className="p_style">
                  We are a team of professional 
                  <Link to="/custom-whmcs-development"> WHMCS developers </Link> 
                  who’re young, experienced, innovative, and more importantly
                  loyal to our customers. We offer a wide range of striving
                  WHMCS services and custom solutions that are intended to
                  amplify your business growth! Let’s have a look at our team’s
                  expertise:
                </p>
                <ul>
                  <li>
                    <span className="icon icon-checked"></span> Squad of
                    well-experienced WHMCS developers working on WHMCS
                    development and customization since WHMCS platform’s
                    inception.
                  </li>
                  <li>
                    <span className="icon icon-checked"></span> Over 15 years of
                    experience in web hosting management.
                  </li>
                  <li>
                    <span className="icon icon-checked"></span> Team of
                    professional web designers who can transform your WHMCS to
                    look like a website.
                  </li>
                  <li>
                    <span className="icon icon-checked"></span> Business
                    analysts who can evaluate how WHMCS can help you address
                    your problems rapidly.
                  </li>
                  <li>
                    <span className="icon icon-checked"></span> Software quality
                    analysts that fully test WHMCS customizations and newly
                    created plug-ins/modules before they are made available to
                    you.
                  </li>
                  <li>
                    <span className="icon icon-checked"></span> All of the squad
                    members have one thing in common: we are all WHMCS PRO!
                  </li>
                </ul>
                <div className="team_btns">
                  <Link to="/custom-whmcs-development" className="default_btn">
                    Get Started Now
                  </Link>
                  <Link to="/about" className="default_btn more-btn">
                    Want to more <span>whmcs digital ?</span>
                    <i className="icon icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling WHMCS Products Section */}
      <section className="software product_page home_product">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top_title">
                <div className="top_tag">
                  <span>Products</span>
                </div>
                <h2 className="h2_style">Best Selling WHMCS Products</h2>
                <p className="p_style">
                  Delivering Cutting-Edge &amp; High-quality WHMCS Solutions
                  Owing to Amplify Your Business Growth!
                </p>
              </div>
            </div>
          </div>
          <div className="row row-40">
            {Allcards.slice(0, 4).map((yehiElement) => {
              return (
                <div
                  className="col-sm-6 col-md-4 col-xl-3"
                  key={yehiElement.id}
                >
                  <Card
                    title={yehiElement.title}
                    image={yehiElement.image}
                    description={yehiElement.description}
                    readmorelink={yehiElement.readmorelink}
                    price={yehiElement.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

       {/* Testimonial Section      */}
        <section className="testimonial_section home_testimonial">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-9">
                        <div className="testimonial-top">
                            <h3>Testimonials</h3>
                            <h2 className="h2_style">WHMCS Digital loved by users worldwide</h2>
                            <div className="review"> <span className="icon icon-star"></span> <span className="icon icon-star"></span> <span className="icon icon-star"></span> <span className="icon icon-star"></span> <span className="icon icon-half"></span> </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="view_all"> <a href="https://goo.gl/maps/c6qTQGnyzbgPqVdC8" target="_blank" className="default_btn">View All Reviews</a> </div>
                    </div>
                </div>
                <div className="TestimonialSlider row-40">
                  <TestimonialSlider/>
                </div>
          </div>
        </section>

      {/* CTA Section  */}
      <Cta
        title="Start Growing With WHMCS Digital"
        description="With tools to make every part of your process more human and a support team excited to help you."
      />
    </>
  );
};

export default Home;
