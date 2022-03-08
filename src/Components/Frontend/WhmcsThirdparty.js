import react from "react";
import { useEffect } from "react";
import Cta from "./Cta";
import TestimonialSlider from "./TestimonialSlider";
import { Link } from 'react-router-dom';
import GetintouchForm from "./GetintouchForm"

const WhmcsThirdparty = (props) => {

    useEffect(() => {
        document.title = `Affordable Third-Party API & App Integration Solutions | WHMCS Digital`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
      }, []);

  return (
    <>

        {/* Banner Section */}
        <div className="product_banner service_banner third_party">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6">
                        <h1><span><b>Third Party</b> Tool/APIs<br></br>integration</span> </h1>
                        <p className="p_style">It's time for your company to take advantage of third-party APIs to power integration with another company's app or web service.</p>
                        <div className="party_vendors">
                            <h4>3rd party vendors</h4>
                            <div className="vendor_logo"> 
                            <img src="whmcs-digital/images/whmcs_icon.png" alt="WHMCS Third Party tool &amp; API integration"/>
                            <img src="whmcs-digital/images/direct_logo.png" alt="Direct Third Party tool &amp; API integration"/>                      
                            <img src="whmcs-digital/images/cPanel_logo.png" alt="cPanel Third Party tool &amp; API integration"/>
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

        {/* Third Party API Integration Section */}
        <section className="whmcs_services perform_section service_detail third_party">
            <div className=" container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2_style medium_weight">Third-Party API Integration Services<br></br>Everything your business needs to know</h2>
                        <p className="p_style">This is the time to explore the benefits that are coming along with third-party API integration services. </p>
                    </div>
                </div>
                <div className="row row-0 mr_top">
                    <div className="col-md-6 col-lg-4">
                        <div className="services_box add_border">
                            <div className="shape_img"> <img src="whmcs-digital/images/security.svg" alt="Secure & Scalabel"/> </div>
                            <h3>Secure &amp; Scalabel</h3>
                            <p className="p_style">We offer the services that are secure and easy to expand according to the latest technology.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="services_box add_border">
                            <div className="shape_img"> <img src="whmcs-digital/images/api-Integration.svg" alt="API Integration"/> </div>
                            <h3>API Integration</h3>
                            <p className="p_style">We integrate third party API to the system and increase the functionality of the application for better productivity. </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="services_box add_border">
                            <div className="shape_img"> <img src="whmcs-digital/images/developer-friendly.svg" alt="Developer Friendly"/> </div>
                            <h3>Developer Friendly</h3>
                            <p className="p_style">We make sure that the API integration is developer friendly and easy to upgrade according to the requirements. </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="services_box add_border">
                            <div className="shape_img"> <img src="whmcs-digital/images/manual-integration.svg" alt="Manual Integration"/> </div>
                            <h3>Manual Integration</h3>
                            <p className="p_style">We also offer manual integration of third-party API to add features to the system. </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="services_box add_border">
                            <div className="shape_img"> <img src="whmcs-digital/images/support-tools.svg" alt="Support Tools"/> </div>
                            <h3>Support Tools</h3>
                            <p className="p_style">Our clients are going to enjoy the exceptional quality support that our technical team provides. We are here to serve you with the best tools. </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="services_box add_border">
                            <div className="shape_img"> <img src="whmcs-digital/images/testing-website.svg" alt="Testing Website"/> </div>
                            <h3>Testing website</h3>
                            <p className="p_style">We ensure that there are no bugs in the website/software functionality by performing testing regularly. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Get in Touch */}
        <section className="get_touch whmcs_setup third_party">
            <div className="container">
                <div className="tell_more">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <div className="get_touch_text">
                                <h2>Get in Touch<br></br>We’re always ready to help. </h2>
                                <div className="get_box">
                                    <div className="media">
                                        <div className="media-left"> <span className="icon icon-checked"></span> </div>
                                        <div className="media-body">
                                            <h3>Start your service from any WHMCS agency</h3>
                                            <p> Choose the WHMCS agency whichever you like and take the first step. </p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left"><span className="icon icon-checked"></span></div>
                                        <div className="media-body">
                                            <h3>Finish routine tasks automatically</h3>
                                            <p>Established fact that a reader will be distracted</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left"> <span className="icon icon-checked"></span> </div>
                                        <div className="media-body">
                                            <h3>Simple, fill-in-the-blank setup, update version </h3>
                                            <p>Fill the blank setup and update the version. You will be good to go. </p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left"> <span className="icon icon-checked"></span> </div>
                                        <div className="media-body">
                                            <h3>Finish routine tasks automatically</h3>
                                            <p>Established fact that a reader will be distracted</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="get_touch_form banner_form">
                                <h3>Tell us more about your project</h3>
                                <GetintouchForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Tab Section */}
        <section className="benefit_section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2_style">Benefits of Third-party APIs Intergration</h2>
                    </div>
                </div>
                <div className="row mr_top">
                    <div className="col-md-12 col-lg-3"> <a className="default_btn collapsed" data-toggle="collapse" href="#tabMenu" role="button" aria-expanded="false" aria-controls="tabMenu"> Tab Menu </a>
                        <div className="collapse" id="tabMenu">
                            <div className="nav flex-column nav-pills collapsed" id="v-pills-tab" role="tablist" aria-orientation="vertical" data-toggle="collapse" aria-expanded="false" href="#tabMenu"> 

                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><span className="icon icon-responsive"></span> Powerful 3rd API</a> 

                                <a className="nav-link"id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><span className="icon icon-responsive"></span> Public API</a> 

                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><span className="icon icon-responsive"></span> Custom API Development</a> 

                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><span className="icon icon-responsive"></span> Extends the Functionality</a> 
                                
                                <a className="nav-link" id="v-pills-business-tab" data-toggle="pill" href="#v-pills-business" role="tab" aria-controls="v-pills-business" aria-selected="false"><span className="icon icon-responsive"></span> Business Intelligence</a> 

                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade active show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="benefit_text">
                                            <h3><span>Powerful API</span> Basic Settings of WHMCS Digital</h3>
                                            <p className="p_style">Do you want to get a powerful tool to make your business easier? </p>
                                            <p className="p_style">Then Public API is one of a kind. Public API will be open to everyone, which makes it easy for companies to spread awareness of the brand. It is time to turn the magic of Public API in your favour. So, what are you
                                                waiting for now? </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="benefit_img"> 
                                        <img src="whmcs-digital/images/powerful-api.png" alt="Powerful Api - Third Party tool & API integration" className="img-fluid"/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="benefit_text">
                                            <h3><span>Public API</span> Basic Settings of WHMCS Digital</h3>
                                            <p className="p_style">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                            <p className="p_style">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                            <p className="p_style">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="benefit_img"> <img src="whmcs-digital/images/powerful-api.png" alt="Public Api - Third Party tool &amp; API integration" className="img-fluid"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="benefit_text">
                                            <h3><span>Custom API Development</span> Basic Settings of WHMCS Digital</h3>
                                            <p className="p_style">Get the most effective and powerful tool on your side. A Custom API will assist you in connecting with your target audience, raising brand awareness, and making your work much easier than before.</p>
                                            <p className="p_style">Custom API will be able to meet every demand of your business. What could be more exceptional than a well-run business? APIs should be a business's must-have tool. It's time to push yourself to new limits.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="benefit_img"> <img src="whmcs-digital/images/powerful-api.png" alt="Custom API Development - Third Party tool & API integration" className="img-fluid"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="benefit_text">
                                            <h3><span>Extends the Functionality</span> Basic Settings of WHMCS Digital</h3>
                                            <p className="p_style">API is the best tool to grow your business. Now you can get exceptional extended features to make the whole business process a lot easier than before. What else are you looking for? Give your business the best tool and benefits it needs to grow. It is time to make your business grow. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="benefit_img"> <img src="whmcs-digital/images/powerful-api.png" alt="Extends the Functionality - Third Party tool &amp; API integration" className="img-fluid"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-business" role="tabpanel" aria-labelledby="v-pills-business">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="benefit_text">
                                            <h3><span>Business Intelligence</span> Basic Settings of WHMCS Digital</h3>
                                            <p className="p_style">Do you want to enjoy an ever-growing business? If yes, then you must have to add tools that can add to the growth of your business. </p>
                                            <p className="p_style">Now you can increase the business intelligence of your business by adding exceptional tools. The additional features are going to make your business touch new heights each day. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="benefit_img"> <img src="whmcs-digital/images/powerful-api.png" alt="Business intelligence - Third Party tool &amp; API integration" className="img-fluid"/> </div>
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

        {/* CTA Section  */}
        <Cta title="Start Growing With WHMCS Digital" />
    </>
  );
};

export default WhmcsThirdparty;
