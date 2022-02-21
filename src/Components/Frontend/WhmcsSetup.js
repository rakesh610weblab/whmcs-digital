import React from "react";
import { useEffect } from "react";
import ContactusForm from "./ContactusForm";
import TestimonialSlider from "./TestimonialSlider";
import Cta from "./Cta";
import FeatureBox from "./FeatureBox";
import WhmcsdigitalBox from "./WhmcsdigitalBox";

const WhmcsSetup = (props) => {
  useEffect(() => {
    document.title = `WHMCS Setup, Version upgrade & Configuration | WHMCS Digital`;
    props.setProgress(100);
    document.querySelector("header").className = "header_main inner_page";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      {/* Welcomne Section */}
      <div className="product_banner service_banner whmcs_setup">
        <div className="container">
          <div className="row align-items-center row-0">
            <div className="col-md-12 col-lg-6">
              <span className="banner_tag">WHMCS 8.0 Updated</span>
              <h1>
                <span>WHMCS Setup,</span> Version upgrade and Configuration
              </h1>
              <ul className="check_list">
                <li>
                  <span className="icon icon-checked"></span> Setup WHMCS
                </li>
                <li>
                  <span className="icon icon-checked"></span> Upgrade the
                  version
                </li>
                <li>
                  <span className="icon icon-checked"></span> Configure the
                  WHMCS setup
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
                  src="whmcs-digital/images/whmcs-setup-img.png"
                  alt="WHMCS Setup, Version upgrade and Configuration"
                  className="img-fluid"
                />
                <div className="version_box">
                  <div className="media">
                    <div className="media-left">
                      <img src="whmcs-digital/images/download_icon.svg" alt="Version" />
                    </div>
                    <div className="media-body">
                      <h4>New Installation with</h4>
                      <h2>V8.02</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Boxes Section */}
      <section className="whmcs_services service_page whmcs_setup_service">
        <div className="container">
          <div className="whmcs_setup_box">
            <div className="row">
              <div className="col-12">
                <h2 className="h3_style">Let’s have a look at the feature</h2>
                <p className="p_style">
                  It is time to explore the features you are going to enjoy
                </p>
              </div>
            </div>
            <div className="row row-50">
              <FeatureBox
                featureicon="icon-tools"
                featuretitle="Manual Integration"
                featuredescription="Don’t worry about integration because our team will do the integration by using the top-notch quality technology throughout the process."
              />

              <FeatureBox
                featureicon="icon-to-do"
                featuretitle="Our Webiste"
                featuredescription="We have the best advanced level, modern designed website to interact with our clients in the most effective way."
              />

              <FeatureBox
                featureicon="icon-responsive"
                featuretitle="Testing website"
                featuredescription="Are you worried about the efficiency of your website? Don’t worry, we run sufficient tests to make sure your audience gets only the best."
              />

              <FeatureBox
                featureicon="icon-timeline"
                featuretitle="Fast Turnaround"
                featuredescription="It is time to give the boost that your company needs. Our system can help you generate the desired profits."
              />

              <FeatureBox
                featureicon="icon-maintenance"
                featuretitle="WHMCS Experts"
                featuredescription="We have the best experts to cater your needs when it comes to WHMCS. You will get the best team to help you out."
              />

              <FeatureBox
                featureicon="icon-consultant"
                featuretitle="User Support"
                featuredescription="We will provide exceptional quality support to your business. So, when in trouble remember we are just a call away from you."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="get_touch whmcs_setup">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-7">
              <div className="get_touch_text">
                <h2>
                  We are here to offer some other exceptional benefits. Are you
                  ready to know more?
                </h2>
                <div className="get_box">
                  <div className="media">
                    <div className="media-left">
                      <span className="icon icon-checked"></span>
                    </div>
                    <div className="media-body">
                      <h3>15-days free trail</h3>
                      <p>
                        Get a 15 days free trial and then make your final call.
                        Isn’t it amazing?
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <span className="icon icon-checked"></span>
                    </div>
                    <div className="media-body">
                      <h3>24/7 support availability</h3>
                      <p>
                        Get round-the-clock support from the best team. We are
                        here to solve your every problem.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <span className="icon icon-checked"></span>
                    </div>
                    <div className="media-body">
                      <h3>100% satisfaction guaranteed</h3>
                      <p>
                        You will get 100% satisfaction with the top-notch
                        quality services. So, avail the services right away!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="get_touch_form banner_form">
                <h3>Get In Touch</h3>
                <ContactusForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHMCS Digital Section */}
      <section className="best_bussiness">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Enjoy the best business services with our amazing WHMCS Digital.
              </h2>
              <p className="p_style">
                Let’s explore more about the benefits you are going to get with
                our amazing services.
              </p>
            </div>
          </div>
          <div className="row mr_top">
            <WhmcsdigitalBox
              digitalclass="latest_tec"
              digitalicon="responsive"
              digitaltitle="Latest Technologies"
              digitaldescription="We will provide best services by using the latest technologies only. It is time to make your journey easy for you."
            />

            <WhmcsdigitalBox
              digitalclass="upgrade_box"
              digitalicon="responsive"
              digitaltitle="Upgrade Service"
              digitaldescription="We ensure to upgrade the services  to the new trends so that customers can take their business to the next level."
            />

            <WhmcsdigitalBox
              digitalclass="transfer_box"
              digitalicon="responsive"
              digitaltitle="Transfer Service"
              digitaldescription="It is easy for our experts to transfer services from one platform to the other according to the business requirements."
            />

            <WhmcsdigitalBox
              digitalclass="enterprice_box"
              digitalicon="responsive"
              digitaltitle="Enterprice"
              digitaldescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            />
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
  );
};

export default WhmcsSetup;
