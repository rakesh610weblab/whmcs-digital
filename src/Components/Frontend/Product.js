import React from "react";
import { useEffect, useState } from "react";
import Cta from "./Cta";
import ProductsCards from "./Dynamicdata/ProductsCards";
import Card from "./Card";
import $ from "jquery"
import Isotope from "isotope-layout";

const Product = (props) => {

  // state for storing the isotope object, with an initial value of null
  const [isotope, setIsotope] = useState(null); 
  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    document.title = `Products | WHMCS Digital`;
    props.setProgress(100);
    document.querySelector("header").className = "header_main inner_page";
  }, []);

  useEffect(() => {
    setIsotope(
      new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      filterKey === '*' ? isotope.arrange({ filter: `*` }) : isotope.arrange({ filter: `.${filterKey}` });
    }
    
    var $buttonGroup = $('.filters');
    $buttonGroup.on('click', 'li', function(event) {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        var $button = $(event.currentTarget);
        $button.addClass('is-checked');
    });
  }, [isotope, filterKey]);


  return (
    <>
      <div className="product_banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="banner_tag">WHMCS Awesome Products</span>
              <h1>
                Powerful, Flexible, and Highly Customizable WHMCS Solutions -
                <br></br>
                <span>Everything under One Roof!</span>
              </h1>
              <h3>
                Fully featured modules, templates, themes, and custom
                development services.
              </h3>
              <div className="search_form">
                {/* <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find a moudle, products etc..."
                  />
                  <div className="input-group-append">
                    <button className="default_btn">Search</button>
                  </div>
                </div> */}
                <p>
                  Over 100 High-End Modules, Extensions And Themes With
                  <span>7-Day Free Access!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="software product_page">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="top_title">
                          <h2 className="h2_style">We’ve Got Your All WHMCS Needs Covered!</h2>
                          <p className="p_style">Delivering Cutting-Edge &amp; High-quality WHMCS Solutions Owing to Amplify Your Business Growth!</p>
                      </div>
                  </div>
              </div>

              <div className="row product_tabs">
                  <div className="col-md-12">
                      <div className="filters product_page">
                          <ul>
                              <li className="is-checked" onClick={() => setFilterKey('*')}>All</li>
                              <li onClick={() => setFilterKey('domain')}>Domain</li>
                              <li onClick={() => setFilterKey('payment')}>Payment Gateway</li>
                              <li onClick={() => setFilterKey('server')}>Server Provision</li>
                              <li onClick={() => setFilterKey('theme')}>Theming</li>
                              <li onClick={() => setFilterKey('report')}>Reporting</li>
                              <li onClick={() => setFilterKey('market')}>Marketing</li>
                              <li onClick={() => setFilterKey('other')}>Others</li>
                          </ul>
                      </div>
                  </div>

                  <div className="col-md-12">
                      <div className="row row-40 justify-content-center filter-container" >
                        {ProductsCards.map((yehiElement) => {
                          return (
                            <div className={`col-sm-6 col-md-4 col-xl-3 filter-item ${yehiElement.category}`} key={yehiElement.id}>
                              <Card
                                category={yehiElement.category}
                                title={yehiElement.title}
                                image={yehiElement.image}
                                description={yehiElement.description}
                                readmorelink="/contact"
                                price={yehiElement.price}
                                contact_text="Contact Us"
                              />
                            </div>
                          );
                        })}
                      </div>
                  </div>
              </div>
          </div>
      </section>


      {/* CTA Section  */}
      <Cta title="Not able to find required module? Or looking for custom module" />
    </>
  );

};

export default Product;
