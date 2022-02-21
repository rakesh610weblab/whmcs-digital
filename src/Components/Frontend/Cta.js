import React from 'react';
import { Link } from 'react-router-dom';

const Cta = (props) => {

  return (
    <>
        <section className="growing_section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{props.title}</h2>
                        <p className="p_style">{props.description}</p>
                        <Link to="/contact" className="default_btn">Get Started Now</Link> 
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default Cta;
