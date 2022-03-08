import React from 'react'
import ContactusForm from './ContactusForm'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Support = (props) => {

    useEffect(() => {
        document.title = `24/7 Support Services for WHMCS Installation, Integration & Migration`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
        window.scrollTo(0, 0)
      }, []);

  return (
    <>

        {/* Banner Section */}
        <section className="product_banner contact_banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1> <span>Support</span> </h1>
                        <p className="p_style">Communication is important for us to understand one another. Enable us to get a better understanding<br></br>of your WHMCS needs or queries. Give us the chance to serve you. </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Boxes */}
        <section className="sale_section">
            <div className="container">
                <div className="row row-40">
                    <div className="col-md-4">
                        <div className="sale_box">
                            <div className="sale_icon"> <img src="whmcs-digital/images/sale.svg" alt="Sale"/> </div>
                            <h3>Sales</h3>
                            <p className="p_style">Discover how we’ve assisted and transformed these companies' fortunes to the next level.</p>
                            <div className="sale_btn"> <a href="//www.whmcsdigital.com/clientarea/submitticket.php?step=2&amp;deptid=1" target="_blank" rel="noopener">Contact sale <span className="icon icon-right-arrow"></span></a> </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sale_box">
                            <div className="sale_icon"> <img src="whmcs-digital/images/support.svg" alt="Sale"/> </div>
                            <h3>Help &amp; Support</h3>
                            <p className="p_style">Get 24×7 WHMCS support services and manage your portal in a more efficient manner.</p>
                            <div className="sale_btn"> <a href="//www.whmcsdigital.com/clientarea/submitticket.php?step=2&amp;deptid=2" target="_blank" rel="noopener">Get Support <span className="icon icon-right-arrow"></span></a> </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sale_box">
                            <div className="sale_icon"> <img src="whmcs-digital/images/knowledgebase.svg" alt="Sale"/> </div>
                            <h3>Knowledgebase</h3>
                            <p className="p_style">Access our WHMCS knowledgebase and get answers to any of your questions.</p>
                            <div className="sale_btn"> <Link to="/faq">Explore Faqs <span className="icon icon-right-arrow"></span></Link> </div>
                        </div>
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
                            <div className="map_img"> <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" width="520" height="400" src="https://maps.google.com/maps?width=520&height=400&hl=en&q=Times%20square%20Mohali+(610%20Wb%20Lab)&t=&z=12&ie=UTF8&iwloc=B&output=embed"></iframe>                        </div>
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
  )
}

export default Support