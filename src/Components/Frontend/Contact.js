import React from 'react';
import { useEffect } from 'react';
import ContactusForm from './ContactusForm';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    useEffect(() => {
        document.title = `Contact Us for WHMCS Custom Development Services, Modules & Themes`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
        window.scrollTo(0, 0)
      }, []);

  return (
        <>
            {/* Banner */}
            <section className="product_banner contact_banner contact_page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1> <span>Contact Us</span> </h1>
                            <p className="p_style">Communication is important for us to understand one another. Enable us to get a better understanding<br></br>of your WHMCS needs or queries. Give us the chance to serve you. </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact form Section */}
            <section className="tell_section contact_page">
                <div className="container">
                    <div className="row">
                        <div className="col-12 top_title">
                            <h2 className="h2_style">Get in Touch with Us!</h2>
                            <p className="p_style">Please provide the following information about you and get connected with us. </p>
                        </div>
                        <div className="col-12">
                            <div className="contact_form">
                                <ContactusForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="map_outer">
                                <div className="map_img"> <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" width="520" height="400" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3430.408280542107!2d76.685332!3d30.7069206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef60a1ea7de3%3A0x86c212f4d6dabcb3!2sWHMCS%20Digital!5e0!3m2!1sen!2sin!4v1636522338070!5m2!1sen!2sin"></iframe>                        </div>
                                <div className="address_box">
                                    <h2>Have any question?<br></br>feel free to contact with us.</h2>
                                    <div className="address_outer">
                                        <div className="address_text">
                                            <h3>Headquarters office</h3>
                                            <p>C-196/A, Times Square Building, Phase 8B, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 160071</p>
                                        </div>
                                    </div>
                                    <Link to="" className="contact_btn">Visit our Newsroom for contact info
                                        <span className="icon icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
);
};

export default Contact;
