import React from 'react';

const SimpleBanner = (props) => {
  return (
        <>
            <section class="product_banner about_banner privacy_banner">
                <div class="container">
                    <div class="row">
                        <div class="col-12"> <span class="banner_tag"> {props.title} </span>
                            <h1><span>{props.pagetitle}</span></h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SimpleBanner;
