import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
    useEffect(() => {
        document.title = `Read more about WHMCS Digital - Best WHMCS Development Company`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
        window.scrollTo(0, 0)
      }, []);
  return (
        <>
        <section className="product_banner about_banner">
            <div className="container">
                <div className="row">
                    <div className="col-12"> <span className="banner_tag">WHMCS Digital About Us</span>
                        <h1>Trusted and well-knowledgeable WHMCS experts shaping the<br></br><span>future of your business!</span></h1>
                        <p>Get customized WHMCS Themes and modules for all types of businesses in the timeframe you desire and on a budget, you can afford. Take the opportunity to get in a better picture with us. </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="about_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_text">
                            <h2 className="h2_style">Why WHMCS Digital ?</h2>
                            <p>WHMCS Digital is a one-stop destination for all your <Link to="/custom-whmcs-development">WHMCS development</Link>-related needs. We have a team of reliable WHMCS experts who have been serving clients with everything
                                that they require for their WHMCS based business covering services such as configuration, integration, security &amp; upgrades. </p>
                            <p>What sets us apart from the market is our great expertise in the web hosting industry. This enables us to set up your portal with the same settings and enhancements we have used for our <Link to="/home">WHMCS Digital</Link>                        site. With our several years of technical expertise in WHMCS and service delivery, we offer high-quality WHMCS modules, templates, themes, and other custom development services and put our best efforts to make web hosting automation
                                easy for our clients. We are committed to providing you affordable, reliable, and on-time WHMCS-oriented solutions. Let us know your WHMCS development requirements today and kick start your journey to a wonderful WHMCS experience
                                with us.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_img"> <img src="/images/about_img.jpg" alt="About"/> </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="people_section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2_style">People in every role and industry use<br></br><span>WHMCS Digital</span> to work better</h2>
                    </div>
                </div>
                <div className="row mr_top">
                    <div className="col-md-4">
                        <div className="people_box">
                            <div className="people_img"> <img src="/images/people_img1.jpg" alt="People"/> </div>
                            <h4>Ambitious workaholic, but apart</h4>
                            <h3>Christina Kray</h3>
                            <p>Lead Developer, Genome</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="people_box">
                            <div className="people_img"> <img src="/images/people_img2.jpg" alt="People"/> </div>
                            <h4>Ambitious workaholic, but apart</h4>
                            <h3>Jeff Fisher</h3>
                            <p>Lead Developer, Genome</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="people_box">
                            <div className="people_img"> <img src="/images/people_img3.jpg" alt="People"/> </div>
                            <h4>Ambitious workaholic, but apart</h4>
                            <h3>Konrad Keck</h3>
                            <p>Lead Developer, Genome</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mission_section">
            <div className="container">
                <div className="row">
                    <div className="col-12 top_title">
                        <h2 className="h2_style">WHMCS Digital Vision &amp; Mission</h2>
                        <p>Our vision is totally centered on strengthening and solidifying web hosting-based businesses by delivering serious WHMCS automation &amp; support services. Our only goal is to offer high-quality ethical WHMCS services with 24/7 technical
                            support, on-time delivery, and pocket-friendly budget benefits. </p>
                    </div>
                </div>
                <div className="row mr_top">
                    <div className="col-md-4">
                        <div className="mission_box">
                            <h3 className="h2_style">24/7 Expert Support<br></br>Customers Love</h3>
                            <p className="p_style">We have a dedicated WHMCS support team who is 24/7 hours available to quickly respond to you with the best possible solutions.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mission_box">
                            <h3 className="h2_style">Come Work With WHMCS<br></br>Digital Agency</h3>
                            <p className="p_style">Leave all your WHMCS related hassles on us and you just focus on your business goals.</p><Link to="/contact" className="default_btn get">Get Started</Link> </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mission_img"> <img src="/images/mission_img.png" alt="Mission"/> </div>
                    </div>
                </div>
            </div>
        </section>
        </>
);
};

export default About;
