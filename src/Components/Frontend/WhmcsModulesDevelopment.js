import React from 'react'
import { useEffect } from "react";
import TestimonialSlider from "./TestimonialSlider";
import Cta from './Cta';
import GetintouchForm from './GetintouchForm';
import { Link } from 'react-router-dom';

const WhmcsModulesDevelopment = (props) => {
    
    useEffect(() => {
        document.title = `Custom WHMCS Modules Development |  WHMCS Automation Addons | Shop Now`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
        window.scrollTo(0, 0);
      }, []);

  return (
    <>

        {/* Welcome Section */}
        <div className="product_banner service_banner whmcs_modules">
            <div className="container">
                <div className="row align-items-center row-0">
                    <div className="col-md-12 col-lg-7">
                        <h1><span>WHMCS Modules<br></br>Development & Automation.</span> </h1>
                        <h3>Hire the best developers to help you out. Let our team do all the hard work. It's time to avail all the benefits. </h3>
                        <ul className="check_list">
                            <li> <span className="icon icon-checked"></span> Increase the effectiveness of your website </li>
                            <li> <span className="icon icon-checked"></span> Hire the best experts in the industry </li>
                            <li> <span className="icon icon-checked"></span> Chat with your dedicated developer. </li>
                            <li> <span className="icon icon-checked"></span> Get the solution in no time </li>
                        </ul> <a href="//www.whmcsdigital.com/clientarea/submitticket.php?step=2&amp;deptid=2" className="default_btn" target="_blank" rel="noreferrer">Hire Now</a> </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="whmcs_setup_img"> <img src="/images/whmcs_modules_img.png" alt="WHMCS Modules Development & Automation" className="img-fluid"/> </div>
                    </div>
                </div>
            </div>
        </div>

        {/* We Lead Section */}
        <section className="we_lead">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="we_lead_text">
                            <h2 className="h2_style">We lead brand transformation and digital marketing through the application of modern technologies.</h2>
                            <h3 className="h3_style">If you are looking for reliable, prompt, superior quality services, then WHMCS Digital is the best choice. </h3>
                            <p className="p_style"> In the digital world, your business needs to adapt to the changes and move forward at a fast pace. We are here to make the journey easy for you. </p>
                            <p className="p_style"> Our developers are all set to provide unsurpassable services to help you out. If you want to know more, then we are just a click away. Get in touch with our developers right now! </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Tab Section */}
            <section className="module_type">
                <div className="container">
                    <div className="row">
                        <div className="col-12 top_title">
                            <h2 className="h2_style">Explore various types of Modules</h2>
                            <p className="p_style">Do you want to know the different kinds of modules that we are offering you? If not, then it's time to have a look at them. </p>
                        </div>
                        <div className="col-12">
                            <div className="module_tab">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist"> 
                                            <a className="nav-link active" id="nav-payment-tab" data-toggle="tab" href="#nav-payment" role="tab" aria-controls="nav-payment" aria-selected="true">Payment Gateway</a> 
                                            <a className="nav-link" id="nav-domain-tab" data-toggle="tab" href="#nav-domain" role="tab" aria-controls="nav-domain" aria-selected="false">Domain</a> 
                                            <a className="nav-link" id="nav-server-tab" data-toggle="tab" href="#nav-server" role="tab" aria-controls="nav-server" aria-selected="false">Server Provision</a>                            
                                            <a className="nav-link" id="nav-account-tab" data-toggle="tab" href="#nav-account" role="tab" aria-controls="nav-account" aria-selected="false">Accounting</a> 
                                            <a className="nav-link" id="nav-report-tab" data-toggle="tab" href="#nav-report" role="tab" aria-controls="nav-report" aria-selected="false"> Reporting</a> 
                                            <a className="nav-link" id="nav-market-tab" data-toggle="tab" href="#nav-market" role="tab" aria-controls="nav-market" aria-selected="false"> Marketing</a>                            
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="nav-payment" role="tabpanel" aria-labelledby="nav-payment-tab">
                                        <div className="module_tab_inner">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="module_text">
                                                        <h2 className="h2_style"> Payment Gateway </h2>
                                                        <p className="p_style"> Payment Gateway Charges For WHMCS is designed to give you the flexibility to offer a variety of trusted payment gateways to make the process go more smoothly. The module will allow you to specify which gateways
                                                            are acceptable to you. You can create as many billing rules as you want. You will get the ease to operate the payment section without any hassle. </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="module_img"> <img src="/images/payment-gateway.svg" alt="Payment Gateway - WHMCS Modules Development" className="payment_img"/> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-domain" role="tabpanel" aria-labelledby="nav-domain-tab">
                                        <div className="module_tab_inner">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="module_text">
                                                        <h2 className="h2_style"> Domain </h2>
                                                        <p className="p_style"> We work with all of the major domain registrars to offer features like automatic registration, real-time domain availability checks, nameserver management, and automatic renewals. All of the tools you'll need
                                                            to sell domains, including advanced domain suggestions and a fully functional customer self-service management portal. All of this will be covered in this module. </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="module_img"> <img src="/images/domin_img.svg" alt="Domain - WHMCS Modules Development" className="payment_img"/> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-server" role="tabpanel" aria-labelledby="nav-server-tab">
                                        <div className="module_tab_inner">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="module_text">
                                                        <h2 className="h2_style"> Server Provision </h2>
                                                        <p className="p_style"> Provisioning Modules in WHMCS allow for the provisioning and management of services. Product or Server Modules are other names for Provisioning Modules. A module's primary function is to create, suspend, unsuspend,
                                                            and terminate products. This occurs as a result of various events. Everything will be contained in a single module for you to enjoy. What else do you want? </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="module_img"> <img src="/images/server-provision.svg" alt="Server Provision - WHMCS Modules Development" className="payment_img"/> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">
                                        <div className="module_tab_inner">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="module_text">
                                                        <h2 className="h2_style"> Accounting </h2>
                                                        <p className="p_style"> You can now give access to an unlimited number of client accounts through a single account and set permissions per sub-account using this module. This module is designed to make your life easier by allowing
                                                            you to easily access your accounts. In every way, the WHMCS accounting module will benefit your company. Get in touch with us to know more about it. </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="module_img"> <img src="/images/accounting.svg" alt="Accounting - WHMCS Modules Development" className="payment_img"/> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-report" role="tabpanel" aria-labelledby="nav-report-tab">
                                        <div className="module_tab_inner">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="module_text">
                                                        <h2 className="h2_style"> Reporting </h2>
                                                        <p className="p_style"> The Reporting Module was created with the goal of providing a feature-rich and easy-to-use web interface for managing reports. The Reporting Module also includes a flexible and extensible API that module developers
                                                            can use to create their own reports and tools. This will aid in the smooth operation of the business. Be ready to enjoy the unsurpassable features of this module. </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="module_img"> <img src="/images/reporting.svg" alt="Reporting - WHMCS Modules Development" className="payment_img"/> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-market" role="tabpanel" aria-labelledby="nav-market-tab">
                                        <div className="module_tab_inner">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="module_text">
                                                        <h2 className="h2_style"> Marketing </h2>
                                                        <p className="p_style"> The Marketing Module is designed to increase brand awareness and reach the maximum audience. With the help of efficient features of the marketing module, it is easy to reach the potential WHMCS audience easily
                                                            and in less time. So, make the promotions hassle free using this module. </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="module_img"> <img src="/images/marketing.svg" alt="Marketing - WHMCS Modules Development" className="payment_img"/> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        {/* Form Section     */}
        <section className="module_get">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="module_form">
                            <div className="get_touch_form banner_form">
                                <h3>Get In Touch</h3>
                            <GetintouchForm/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="module_get_text"> <Link to="/home"> 
                        <img src="/images/logo.png" alt="WHMCS Digital"/> </Link>
                            <h2 className="h2_style">WHMCS Digital offerings</h2>
                            <div className="offer_outer">
                                <div className="media align-items-center">
                                    <div className="media-left"> 
                                    <img src="/images/free-consultation.svg" alt="Free Consultation for WHMCS Modules Development"/> </div>
                                    <div className="media-body">
                                        <h3>Free Consultation</h3>
                                        <p>Want free consultation regarding WHMCS modules? Then contact us right away. We are just a click away. </p>
                                    </div>
                                </div>
                                <div className="media align-items-center">
                                    <div className="media-left"> 
                                    <img src="/images/support-img.svg" alt="24x7 Support for WHMCS Modules Development"/> </div>
                                    <div className="media-body">
                                        <h3>24/7/365 Support</h3>
                                        <p>We are here to offer round-the-clock support to our clients. Our team got your back in any situation</p>
                                    </div>
                                </div>
                                <div className="media align-items-center">
                                    <div className="media-left"> 
                                    <img src="/images/developer.svg" alt="Dedicated Developer for WHMCS Modules Development"/> </div>
                                    <div className="media-body">
                                        <h3>Dedicated Developer</h3>
                                        <p>We have the best team of dedicated and skilled developers to offer unsurpassable services. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
      <section className="testimonial_section module_page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="testimonial-top">
                <h2 className="h2_style">What our clients say</h2>
              </div>
            </div>
          </div>
          <div className="TestimonialSlider row-40 ">
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

export default WhmcsModulesDevelopment