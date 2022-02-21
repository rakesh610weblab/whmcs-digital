import React from 'react'
import { useEffect } from "react";
import ContactusForm from "./ContactusForm";
import TestimonialSlider from "./TestimonialSlider";
import Cta from "./Cta";
import FeatureBox from "./FeatureBox";
import WhmcsdigitalBox from "./WhmcsdigitalBox";

const WhmcsCustomization = (props) => {

    useEffect(() => {
        document.title = `Whmcs Customization - Themes & Clientarea Templates Custom Development`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
        window.scrollTo(0, 0);
      }, []);

  return (
    <>

        {/* Welcomne Section */}
      <div className="product_banner service_banner whmcs_setup customization">
        <div className="container">
          <div className="row align-items-center row-0">
            <div className="col-md-12 col-lg-6">
              <span className="banner_tag">WHMCS and Dev</span>
              <h1>
                <span>WHMCS Customization,</span> and development
              </h1>
              <ul className="check_list">
                <li>
                  <span className="icon icon-checked"></span> Installation of Core Software 
                </li>
                <li>
                  <span className="icon icon-checked"></span> Core Task Automation Setup 
                </li>
                <li>
                  <span className="icon icon-checked"></span> Initial System Configuration 
                </li>
                <li>
                  <span className="icon icon-checked"></span> Setup pf ! Hosting Server/Reseller Account
                </li>
              </ul>
              <a
                href="//www.whmcsdigital.com/clientarea/submitticket.php?step=2&deptid=2"
                target="_blank"
                rel="noreferrer"
                className="default_btn"
                data-target="#GetQuote"
              >
                Get a Quote
              </a>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="whmcs_setup_img">
                <img
                  src="/images/whmcs-customization.png"
                  alt="WHMCS Setup, Version upgrade and Configuration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* WHMCS Digital Section */}
       <section class="best_bussiness custom_theme">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Exceptional Quality Services For Your Business Provided By WHMCS Digital</h2>
                        <p class="p_style">Be ready to avail the benefits of extraordinary services. You are going to get all under the same roof.</p>
                    </div>
                </div>
                <div class="row mr_top">
                    <WhmcsdigitalBox
                    digitalclass="latest_tec"
                    digitalicon="responsive"
                    digitaltitle="WHMCS Creating A Custom Theme"
                    digitaldescription="It’s time for your business to enjoy it by creating a WHMCS custom theme."
                    />
                    <WhmcsdigitalBox
                    digitalclass="upgrade_box"
                    digitalicon="responsive"
                    digitaltitle="WHMCS Custom Theme Development"
                    digitaldescription="Are you looking for custom theme development? Our experts got your back."
                    />
                    <WhmcsdigitalBox
                    digitalclass="transfer_box"
                    digitalicon="responsive"
                    digitaltitle="WordPress Creating A Custom Theme"
                    digitaldescription="Create an impressive WordPress custom theme with the help of our experts."
                    />
                    <WhmcsdigitalBox
                    digitalclass="enterprice_box"
                    digitalicon="responsive"
                    digitaltitle="WordPress Custom Theme Development"
                    digitaldescription="It’s time to level up your WordPress custom theme. Contact us right away!"
                    />
                </div>
            </div>
        </section> 

      {/* Form Section */}
        <section class="get_touch whmcs_setup custom-theme">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-7">
                        <div class="get_touch_text">
                            <h2>Sales Inquries Version upgrade and Configuration Get in touch with us using the form.</h2>
                            <div class="get_box">
                                <div class="media">
                                    <div class="media-left"> <span class="icon icon-checked"></span> </div>
                                    <div class="media-body">
                                        <h3>Start your service from any WHMCS agency</h3>
                                        <p> It is a long established fact that a reader will be distracted</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left"><span class="icon icon-checked"></span></div>
                                    <div class="media-body">
                                        <h3>Finish routine tasks automatically</h3>
                                        <p>Established fact that a reader will be distracted</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left"> <span class="icon icon-checked"></span> </div>
                                    <div class="media-body">
                                        <h3>Simple, fill-in-the-blank setup, update version </h3>
                                        <p>It is a long established fact that a reader will be distracted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-5">
                        <div class="get_touch_form banner_form">
                            <h3>Get In Touch</h3>
                            <ContactusForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Feature Boxes Section */}
        <section class="whmcs_services service_page custom_theme">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="h3_style">Professional WHMCS Customization and Development<br></br>Services We Offer</h2>
                    </div>
                </div>
                <div class="row row-50">
                    <FeatureBox
                        featureicon="icon-tools"
                        featuretitle="Experience in the Hosting Industry"
                        featuredescription="Our experience in providing the best hosting services will help your business to go on a new level. Let our experts help you."
                    />
                    <FeatureBox
                        featureicon="icon-to-do"
                        featuretitle="WHMCS Quality Coding Standards"
                        featuredescription="We believe in providing exceptional quality services. Thus we follow all the quality coding standards that are set in the industry."
                    />
                    <FeatureBox
                        featureicon="icon-responsive"
                        featuretitle="HTML5 to WordPress Theme Conversion"
                        featuredescription="Now, you can convert HTML5 to WordPress in no time. Our experts are all set to do the task in the shortest duration."
                    />
                    <FeatureBox
                        featureicon="icon-timeline"
                        featuretitle="Responsive WHMCS Theme Development"
                        featuredescription="Want to get a responsive WHMCS theme development? Then be ready to get what you want. We won’t let you down."
                    />
                    <FeatureBox
                        featureicon="icon-maintenance"
                        featuretitle="Optimized for speed & performance"
                        featuredescription="Don’t want to lag because of the speed? Then WHMCS digital is there for optimizing the speed and boosting the performance."
                    />
                    <FeatureBox
                        featureicon="icon-consultant"
                        featuretitle="30 days after delivery support"
                        featuredescription="We are extending our support not only till the time of the delivery of the product but also 30 days after it."
                    />
                </div>
            </div>
        </section>      

        {/* Grow your Agenc Blue Section */}
        <section class="your_agency">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="your_agency_inner">
                            <h2 class="h2_style">Grow your Agency Revenue, hire the best WHMCS Theme and WordPress Development Best Developers.</h2>
                            <div class="setting_text">
                                <ul>
                                    <li><span class="icon icon-checked"></span> Invoices</li>
                                    <li><span class="icon icon-checked"></span> Packing Lists</li>
                                    <li><span class="icon icon-checked"></span> Delivery Notes</li>
                                    <li><span class="icon icon-checked"></span> Dispatch Labels</li>
                                    <li><span class="icon icon-checked"></span> Shipping Labels</li>
                                    <li><span class="icon icon-checked"></span> Invoices</li>
                                    <li><span class="icon icon-checked"></span> Packing Lists</li>
                                    <li><span class="icon icon-checked"></span> Delivery Notes</li>
                                    <li><span class="icon icon-checked"></span> Dispatch Labels</li>
                                    <li><span class="icon icon-checked"></span> Shipping Labels</li>
                                </ul>
                            </div><a href="//www.whmcsdigital.com/clientarea/submitticket.php?step=2&amp;deptid=2" class="default_btn" target="_blank">Get a Quote</a> </div>
                    </div>
                </div>
            </div>
        </section>

      {/* Testimonials Section */}
      <section class="testimonial_section service_testimonial whmcs_setup">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12">
              <div class="testimonial-top">
                <h2 class="h2_style">What our clients say</h2>
              </div>
            </div>
          </div>
          <div class="TestimonialSlider row-40 ">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta
        title="Start Growing With WHMCS Digital"
        description="With tools to make every part of your process more human and a support team excited to help you."
      />

    </>
  )
}

export default WhmcsCustomization