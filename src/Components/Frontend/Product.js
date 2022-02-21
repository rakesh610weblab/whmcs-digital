import React from "react";
import { useEffect } from "react";
import Cta from "./Cta";

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
              {" "}
              <span className="banner_tag">WHMCS Awesome Products</span>
              <h1>
                Powerful, Flexible, and Highly Customizable WHMCS Solutions -{" "}
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
                  Over 100 High-End Modules, Extensions And Themes With{" "}
                  <span>7-Day Free Access!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section  */}
      <Cta title="Not able to find required module? Or looking for custom module" />
    </>
  );
};

export default Product;
