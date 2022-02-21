import React from 'react';
import { useEffect } from 'react';
import SimpleBanner from './SimpleBanner';
import Cta from './Cta';
import FaqData from './Dynamicdata/FaqData';
import TestimonialSlider from './TestimonialSlider';

const Faq = (props) => {
    useEffect(() => {
        document.title = `Learn More About Most Asked Question About WHMCS`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
        window.scrollTo(0, 0)
      }, []);

  return (
        <>
            <SimpleBanner title="WHMCS Digital FAQ" pagetitle="Frequently Asked Questions"/>
            <section className="frequently_asked section_padding">
                <div className="container">
                    <div className="row">   
                        <div className="col-12">
                            <div className="top_heading">
                                <h3 className="p_style">FAQ</h3>
                                <h2 className="h2_style">Frequently Asked Questions</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="accordion" id="accordionFAQ">
                                <FaqData/>
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
                    <TestimonialSlider/>  
                    </div>
                </div>
            </section> 


            <Cta title="Start Growing With WHMCS Digital" description="With tools to make every part of your process more human and a support team excited to help you."/>
        </>
);
};

export default Faq;
