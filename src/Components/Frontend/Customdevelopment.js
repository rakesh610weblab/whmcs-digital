import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import GetintouchForm from "./GetintouchForm";

const Customdevelopment = (props) => {
  useEffect(() => {
    document.title = `WHMCS Development Services - Custom WHMCM Modules & Themes Development`;
    props.setProgress(100);
    document.querySelector("header").className = "header_main inner_page";
    window.scrollTo(0, 0)
  }, []);

  return (
    <>

      {/* Banner Section */}
      <div className="product_banner developer_outsourcing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="banner_tag">WHMCS Development</span>
              <h1>
                WHMCS Developer <span>Outsourcing</span>
              </h1>
              <h3>
                Our WHMCS PRO will provide you with spic-and-span WHMCS
                development and maintenance outsourcing services!
              </h3>
              <Link to="/" className="default_btn">
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="custom_content">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="content_box">
                <div className="row">
                  <div className="col-md-6">
                    <div className="content_left">
                      <h2>
                        We provide a wide selection of exclusive services
                        covering everything from allotments of our professional
                        WHMCS developers to your particular projects, priority
                        technical support, to regular software updates and
                        maintenance.
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="content_right">
                      <h3>WHMCS Digital Custom Development</h3>
                      <p className="p_style">
                        With many years of experience, we’ve developed over
                        hundreds of official modules and severed over thousands
                        of web solution providers across the globe with server
                        administration, maintenance, custom development, and
                        much more. So, whether you require modifying,
                        customizing or integrating your WHMCS with other
                        systems, you can opt for WHMCS Digital as we’re an
                        outright leader in bespoke software development services
                        linked to WHMCS.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mr_top">
                  <div className="col-md-6 col-lg-3">
                    <div className="software_box">
                      <span className="icon icon-development"></span>
                      <h4>Dedicated software</h4>
                      <p className="p_style">
                        Dedicated software development team assigned exclusively
                        to you
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="software_box">
                      <span className="icon icon-coding"></span>
                      <h4>Software Development</h4>
                      <p className="p_style">
                        Dedicated software development team assigned exclusively
                        to you
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="software_box">
                      <span className="icon icon-to-do"></span>
                      <h4>Tasks Handled</h4>
                      <p className="p_style">
                        Dedicated software development team assigned exclusively
                        to you
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="software_box">
                      <span className="icon icon-consulting"></span>
                      <h4>Free Consulting</h4>
                      <p className="p_style">
                        Dedicated software development team assigned exclusively
                        to you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHMCS Digital Services Section */}


      {/* One Stop Solution Section */}
      <section className="pricing_section">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h2 className="h3_style">Hire us to develop a product tailored for your company <br></br>$20 monthly for the simple contract of Minimum 3 months!</h2>
                  </div>
              </div>
              <div className="pricing_outer">
                  <div className="row row-0 mr_top align-items-center">
                      <div className="col-md-6">
                          <div className="pricing_box">
                              <h3>One-stop solution</h3>
                              <div className="pricing_text">
                                  <p className="p_style"> We have years of experience backed by the industry’s best WHMCS brains to convert even a hazy idea into a fully functional IT solution just when you demand. Our software development features: </p>
                                  <ul>
                                      <li><span className="icon icon-checked"></span> Robust development models</li>
                                      <li><span className="icon icon-checked"></span> High product security</li>
                                      <li><span className="icon icon-checked"></span> Best cost optimization</li>
                                      <li><span className="icon icon-checked"></span> Project tracking and instant start</li>
                                      <li><span className="icon icon-checked"></span> Trustworthy record</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="pricing_box pricing_right">
                              <h3>Simple Contract</h3>
                              <div className="pricing_text">
                                  <p className="p_style"> We have the know-how and manpower to turn even a rough vision into a best digital ready IT solution. </p>
                                  <h5>3 Months For</h5>
                                  <h4>$249/mo</h4>
                              </div>
                              <Link to="/">Get A Quote</Link> 
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Get In Touch Section */}
      <section className="get_touch">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-12 top_text">
                      <h2 className="h3_style">If you want to explore 
                      <span className="explore_img"> 
                      </span>                    
                      </h2>
                  </div>
                  <div className="col-md-6 col-lg-7">
                      <div className="get_touch_text">
                          <h2>Share your business challenge with us, and we'll come up with a custom solution just for you. Get a wide range of other exclusive benefits, 
                            if you outsource our dedicated WHMCS team and establish a long-term relationship with us!</h2>
                          <div className="get_box">
                              <div className="media">
                                  <div className="media-left"> <span className="icon icon-check"></span> </div>
                                  <div className="media-body">
                                      <h3>24/7 support availability</h3>
                                      <p>We serve as your live chat support agents and respond to technical help inquiries with 24/7 hours availability. </p>
                                  </div>
                              </div>
                              <div className="media">
                                  <div className="media-left"><span className="icon icon-check"></span></div>
                                  <div className="media-body">
                                      <h3>Server management </h3>
                                      <p>Our crew will keep an eye on your servers for 24/7 hours, and immediately resolve any issues with uptime, security, or performance.</p>
                                  </div>
                              </div>
                              <div className="media">
                                  <div className="media-left"> <span className="icon icon-check"></span> </div>
                                  <div className="media-body">
                                      <h3>Multi-channel support</h3>
                                      <p> We can be reached through phone, live chat, help desk, or email, depending on how your customers like to communicate.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-5">
                      <div className="get_touch_form banner_form">
                          <h3>Get In Touch</h3>
                          <GetintouchForm/>
                      </div>
                  </div>
              </div>
          </div>
      </section>  

      {/* WHMCS Digital Development Expertise Section  */}
      <section className="expertise_section">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h2 className="h3_style">WHMCS Digital Development Expertise</h2>
                      <p className="p_style">If you’re having any requirements oriented to WHMCS, make sure to look at our WHMCS expertise. We go above and beyond to ensure that our customers are not just satisfied, but ecstatic with our service. Here are our thousands of projects
                          that have been a huge success: </p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <div className="ExpertiseWrap">
                          <div className="row row-0">
                              <div className="col-md-3">
                                  <div className="item wow fadeInUpBig animated animated" data-number="200">
                                      <h3 id="number1" className="number">153</h3>
                                      <h4>Projects</h4>
                                      <p className="p_style">That Successfully Delivered.</p>
                                  </div>
                              </div>
                              <div className="col-md-3">
                                  <div className="item wow fadeInUpBig animated animated" data-number="400">
                                      <h3 id="number2" className="number">115</h3>
                                      <h4>Happy Clients</h4>
                                      <p className="p_style">Still Working Together</p>
                                  </div>
                              </div>
                              <div className="col-md-3">
                                  <div className="item wow fadeInUpBig animated animated" data-number="400">
                                      <h3 id="number3" className="number">53</h3>
                                      <h4>Technology Experts</h4>
                                      <p className="p_style">Result Oriented Players</p>
                                  </div>
                              </div>
                              <div className="col-md-3">
                                  <div className="item wow fadeInUpBig animated animated" data-number="5">
                                      <h3 id="number4" className="number">10</h3>
                                      <h4>Years</h4>
                                      <p className="p_style">In the WHMCS Business</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Freelance Developer Section */}
      <section className="hire_freelancer">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h2>Why Work with WHMCS Digital and Not with Freelance Developer?</h2>
                      <p className="p_style">Having a short-staffed business? Or, having little to no access to desired resources? This is where outsourced developers or freelancers come into the picture. But, employing a freelance WHMCS developer is a big and strict NO as compared
                          to outsourcing a professional developer because of the following reasons: </p>
                  </div>
              </div>
          </div>
      </section>

      <section className="hire_developer">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="hire_text">
                          <div className="media">
                              <div className="media-left"> 
                                <img src="whmcs-digital/images/freelancer.svg" alt="Custom WHMCS Development"/> 
                              </div>
                              <div className="media-body">
                                  <h2>Hired a <br></br>Freelancer Developer</h2>
                              </div>
                          </div>
                          <ul>
                              <li> <span className="icon icon-checked"></span> No quality assurance as you can’t judge the freelancers by their portfolio listed on freelancing sites. </li>
                              <li> <span className="icon icon-checked"></span> Expensive to hire freelancers per hour for strict timelines and urgent requirements. </li>
                              <li> <span className="icon icon-checked"></span> Lack of communication, closeness, and personal relationship that can ruin your projects. </li>
                              <li> <span className="icon icon-checked"></span> No availability when you need them as they follow a standard 9-to-5 workday and handling multiple projects simultaneously. </li>
                              <li> <span className="icon icon-checked"></span>"Online payment securities, risk of your business idea being stolen, and reduced interviewing options are other issues you may face. </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="hire_text hire_right">
                          <div className="media">
                              <div className="media-left"> 
                                <img src="whmcs-digital/images/developer.svg" alt="Hire a Freelancer - Custom WHMCS Development"/> 
                              </div>
                              <div className="media-body">
                                  <h2>Outsourced a<br></br>Developer</h2>
                              </div>
                          </div>
                          <ul>
                              <li> <span className="icon icon-checked"></span> Outsource with a single click, pay per use, and save around 30-40% of your cost. </li>
                              <li> <span className="icon icon-checked"></span> Great flexibility to choose from a skilled pool of developers. </li>
                              <li> <span className="icon icon-checked"></span> Right match of experience and skillset to deliver projects on time. </li>
                              <li> <span className="icon icon-checked"></span> Need to accurately assess the developers as you choose the pre-vetted talent. </li>
                              <li> <span className="icon icon-checked"></span>"Great security to your information and code collaboration benefits. </li>
                              <li> <span className="icon icon-checked"></span>"Discover the WHMCS developers that fit your projects or needs. </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>


    </>
  );
};

export default Customdevelopment;
