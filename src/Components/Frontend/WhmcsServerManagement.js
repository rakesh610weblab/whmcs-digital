import React from 'react'
import { useEffect } from "react";
import TestimonialSlider from "./TestimonialSlider";
import GetintouchForm from './GetintouchForm';
import Cta from "./Cta";

const WhmcsServerManagement = (props) => {

    useEffect(() => {
        document.title = `Server Management Services & Server Support by WHMCS Digital`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
        window.scrollTo(0, 0);
      }, []);

  return (
    <>

     {/* Welcome Section    */}
     <section className="server_banner">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Web Server Administrator </h1>
                    <h3> <span>Want to take your business to a higher level? Choose the best web server for it.</span></h3> <a href="//www.whmcsdigital.com/clientarea/submitticket.php?step=2&amp;deptid=2" className="default_btn" target="_blank" rel="noreferrer">GET A QUOTE</a>
                    <div className="web_server_img"> <img src="whmcs-digital/images/web-server.png" alt="Web server" className="img-fluid"/> </div>
                </div>
            </div>
        </div>
    </section>

    <section className="whmcs_services perform_section service_detail third_party">
        <div className=" container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h2_style">Server Management</h2>
                    <p className="p_style">Let’s make your business more easy and smooth for you by offering multiple server management options. </p>
                </div>
            </div>
            <div className="row row-40 mr_top server_outer">
                <div className="col-sm-6 col-lg-4">
                    <div className="services_box add_border">
                        <div className="shape_img"> <img src="whmcs-digital/images/cloud_platform.svg" alt="Service"/> </div>
                        <h3>Google Cloud Platform</h3>
                        <p className="p_style">It's time to build and scale applications on a highly scalabel platform without constantly worrying about infrastructure management.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services_box add_border">
                        <div className="shape_img"> <img src="whmcs-digital/images/aws_cloud.svg" alt="Service"/> </div>
                        <h3>AWS Cloud Servers</h3>
                        <p className="p_style">Create, deploy, and manage websites, apps, and processes on AWS cloud server. Create an account and take advantage of AWS' secure, scalabel, and reliable services. </p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services_box add_border">
                        <div className="shape_img vps_img"> <img src="whmcs-digital/images/vps.png" alt="Service"/> </div>
                        <h3>VPS Server</h3>
                        <p className="p_style">Want to enjoy private space on the server? Then VPS server is the best option for you. It’s time to enjoy secure, and reliable services.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services_box add_border">
                        <div className="shape_img"> <img src="whmcs-digital/images/dedicated-server.svg" alt="Service"/> </div>
                        <h3>Dedicated Server</h3>
                        <p className="p_style">Enjoy the whole server space, resources, and things by yourself. Let’s give your business a kickstart with a dedicated server. </p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services_box add_border">
                        <div className="shape_img"> <img src="whmcs-digital/images/ovh-server.svg" alt="Service"/> </div>
                        <h3>OVH Server</h3>
                        <p className="p_style">For your business applications, select the best infrastructure. The most cost-effective option is to use an OVH server. Enjoy the amazing benefits of this server.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services_box add_border">
                        <div className="shape_img"> <img src="whmcs-digital/images/digital-ocean.svg" alt="Service"/> </div>
                        <h3>Digital Ocean</h3>
                        <p className="p_style">With Digital Ocean server, you can deploy faster and scale more easily, saving your team time and money. Get started with the best cloud infrastructure solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="server_hsosting">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h2_style">Server Hosting Control Panels and Support</h2>
                    <p className="p_style">Share your business challenge with us, and we'll create a solution tailored to your needs. If you outsource our dedicated WHMCS team and establish a long-term relationship with us, you'll get a slew of other exclusive benefits!</p>
                    <div
                        className="hosting_logos">
                        <div className="hosting_box">
                            <div className="hsoting_img"> <img src="whmcs-digital/images/cpanel_small_logo.png" alt="Hosting Logo"/> </div><span>cPanel</span> </div>
                        <div className="hosting_box">
                            <div className="hsoting_img"> <img src="whmcs-digital/images/pleask_logo.png" alt="Hosting Logo"/> </div><span>Plesk</span> </div>
                        <div className="hosting_box">
                            <div className="hsoting_img"> <img src="whmcs-digital/images/hp_logo.png" alt="Hosting Logo"/> </div><span>hPanel</span> </div>
                        <div className="hosting_box">
                            <div className="hsoting_img"> <img src="whmcs-digital/images/direct_logo.png" alt="Hosting Logo"/> </div><span>Direct Admin</span> </div>
                        <div className="hosting_box">
                            <div className="hsoting_img"> <img src="whmcs-digital/images/webmin_logo.png" alt="Hosting Logo"/> </div><span>Webmin</span> </div>
                        <div className="hosting_box">
                            <div className="hsoting_img"> <img src="whmcs-digital/images/isp_logo.png" alt="Hosting Logo"/> </div><span>ISPmanager</span> </div>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className="service_offer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="offer_left">
                        <div className="offer_img"> <img src="whmcs-digital/images/server_offfer_img.jpg" alt="Servie Image" className="img-fluid"/> </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="offer_text">
                        <h2 className="h2_style">Service we offer</h2>
                        <ul className="check_list">
                            <li> <span className="icon icon-checked"></span> Server Setup and Apps configuration. </li>
                            <li> <span className="icon icon-checked"></span> VPS Provisioning and Cloud Server provisioning. </li>
                            <li> <span className="icon icon-checked"></span> Server support </li>
                            <li> <span className="icon icon-checked"></span> SMTP Servers setup. </li>
                            <li> <span className="icon icon-checked"></span> Networking, DNS setup and Server monitoring. </li>
                            <li> <span className="icon icon-checked"></span> Load balancer and Automatic Backups Setup. </li>
                        </ul> <a href="//www.whmcsdigital.com/clientarea/submitticket.php?step=2&amp;deptid=2" className="default_btn" target="_blank" rel="noreferrer">Hire Server Administrator</a> </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="get_touch">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-7">
                    <div className="get_touch_text">
                        <h2>Are you encountering issues with your business? If yes, then we got your back. We have the best solution to all your problems. If you are going to hire our WHMCS team then we will be happy to offer the best services.</h2>
                        <div
                            className="get_box">
                            <div className="media">
                                <div className="media-left"> <span className="icon icon-check"></span> </div>
                                <div className="media-body">
                                    <h3>24/7 support availability</h3>
                                    <p> We act as your live chat support agents and respond to technical support requests 24 hours a day, 7 days a week.</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left"><span className="icon icon-check"></span></div>
                                <div className="media-body">
                                    <h3>Server management </h3>
                                    <p>Our team will monitor your servers 24 hours a day, 7 days a week, and will respond quickly to any issues with uptime, security, or performance.</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left"> <span className="icon icon-check"></span> </div>
                                <div className="media-body">
                                    <h3>Multi-channel support</h3>
                                    <p> Depending on how your customers prefer to communicate, we can be reached by phone, live chat, help desk, or email. </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-5">
                <div className="get_touch_form banner_form">
                    <h3>Get In Touch</h3>
                   <GetintouchForm/>
                </div>
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

export default WhmcsServerManagement