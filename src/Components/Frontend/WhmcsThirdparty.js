import react from "react";
import { useEffect } from "react";
import Cta from "./Cta";
import TestimonialSlider from "./TestimonialSlider";
import { Link } from 'react-router-dom';

const WhmcsThirdparty = (props) => {

    useEffect(() => {
        document.title = `Affordable Third-Party API & App Integration Solutions | WHMCS Digital`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
      }, []);

  return (
    <>
        <div className="product_banner service_banner third_party">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                        <h1><span><b>Third Party</b> Tool/APIs<br></br>integration</span> </h1>
                        <p className="p_style">It's time for your company to take advantage of third-party APIs to power integration with another company's app or web service.</p>
                        <div className="party_vendors">
                            <h4>3rd party vendors</h4>
                            <div className="vendor_logo"> 
                            <a href="javascript:;"> <img src="whmcs-digital/images/whmcs_icon.png" alt="WHMCS Third Party tool &amp; API integration"/> </a> 
                            <a href="javascript:;"> <img src="whmcs-digital/images/direct_logo.png" alt="Direct Third Party tool &amp; API integration"/> </a>                        
                            <a href="javascript:;"> <img src="whmcs-digital/images/cPanel_logo.png" alt="cPanel Third Party tool &amp; API integration"/> </a> 
                            </div>
                        </div>
                        <Link to="/contact" className="default_btn">Get a Quote</Link> 
                        </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="banner_third_party"> 
                            <img src="whmcs-digital/images/third-party-img.png" alt="Third Party tool &amp; API integration" className="img-fluid"/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

        {/* CTA Section  */}
        <Cta title="Start Growing With WHMCS Digital" />
    </>
  );
};

export default WhmcsThirdparty;
