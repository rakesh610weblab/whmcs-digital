import React from 'react';
import { useEffect } from 'react';
import Cta from './Cta';
import SimpleBanner from './SimpleBanner';


const Testimonial = (props) => {
    useEffect(() => {
        document.title = `Testimonial | WHMCS Digital`;
        props.setProgress(100);
        document.querySelector("header").className = "header_main inner_page";
        window.scrollTo(0, 0)
      }, []);

  return (
    <>
        <SimpleBanner title="WHMCS Digital Testimonial" pagetitle="Testimonials"/>
        
        <Cta title="Start Growing With WHMCS Digital" description="With tools to make every part of your process more human and a support team excited to help you."/>
    </>
);
};

export default Testimonial;
