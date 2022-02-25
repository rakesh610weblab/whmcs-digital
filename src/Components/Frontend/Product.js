import React from "react";
import { useEffect } from "react";
import Cta from "./Cta";
import Allcards from "./Dynamicdata/Allcards";
import Card from "./Card";

const Product = (props) => {
  useEffect(() => {
    document.title = `Products | WHMCS Digital`;
    props.setProgress(100);
    document.querySelector("header").className = "header_main inner_page";
  }, []);

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
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find a moudle, products etc..."
                  />
                  <div className="input-group-append">
                    <button className="default_btn">Search</button>
                  </div>
                </div>
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
                              <li className="is-checked" data-filter="*">All</li>

                              <li data-filter="domain">Domain</li>

                              <li data-filter="payment">Payment Gateway</li>

                              <li data-filter=".server">Server Provision</li>

                              <li data-filter=".theme">Theming</li>

                              <li data-filter=".report">Reporting</li>

                              <li data-filter=".market">Marketing</li>

                              <li data-filter=".other">Others</li>
                          </ul>
                      </div>
                  </div>

                  <div className="col-md-12">
                      <div className="row row-40 justify-content-center grid">
                        {Allcards.map((yehiElement) => {
                          return (
                            <div
                              className="col-sm-6 col-md-4 col-xl-3" data-category={yehiElement.category}
                              key={yehiElement.id}
                            >
                              <Card
                                category={yehiElement.category}
                                title={yehiElement.title}
                                image={yehiElement.image}
                                description={yehiElement.description}
                                readmorelink={yehiElement.readmorelink}
                                price={yehiElement.price}
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
