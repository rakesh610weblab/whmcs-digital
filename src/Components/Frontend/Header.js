import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <header className="header_main ">
        <div className="top_header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 col-lg-6">
                <div className="follow_us">
                  <p>Follow Us:</p>
                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/WHMCSDigital/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="icon icon-fb"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="skype:sushanttrikha?chat"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="icon icon-skype"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//twitter.com/whmcsdigital"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="icon icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/company/whmcsdigital/"
                        target="_blank" rel="noreferrer"
                      >
                        <span className="icon icon-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 col-lg-6">
                <div className="head_info">
                  <ul>
                    <li>
                      <a href="//www.whmcsdigital.com/clientarea/index.php?rp=/login" target="_blank" rel="noreferrer">
                        <span className="icon icon-user"></span> Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_menu">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                      <img src="./images/logo.png" alt="Logo" />
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon icon-menu"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <button
                        className="navbar-toggler close_btn"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="icon icon-cancel"></span>
                      </button>
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <NavLink
                            activeclassname="active"
                            className="nav-link"
                            to="/home"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            activeclassname="active"
                            className="nav-link"
                            to="/whmcs-modules-themes"
                          >
                            Product
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            activeclassname="active"
                            className="nav-link"
                            to="/custom-whmcs-development"
                          >
                            Custom Development
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <a
                            activeclassname="active"
                            className="nav-link"
                            href="//www.whmcsdigital.com/clientarea/submitticket.php" target="_blank" rel="noreferrer"
                          >
                            Support
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            activeclassname="active"
                            className="nav-link"
                            href="//www.whmcsdigital.com/clientarea/submitticket.php" target="_blank" rel="noreferrer"
                          >
                            Request Quote
                          </a>
                        </li>
                      </ul>
                      <div className="right_menu form-inline">
                        <div className="blog_link">
                          <a className="nav-link " href="//www.whmcsdigital.com/blog/" target="_blank" rel="noreferrer">
                            Blog
                          </a>
                        </div>
                        <div className="blog_link help">
                          <Link className="nav-link" to="//www.whmcsdigital.com/clientarea/submitticket.php" target="_blank" rel="noreferrer">
                            Help
                          </Link>
                        </div>
                        <div className="blog_link help account_menu">
                          <Link to="/" className="login_menu">
                            Account
                          </Link>
                        </div>
                        <div className="contact_btn">
                          <Link className="nav-link default_btn" to="/contact">
                            Contact Us 24/7
                            <span className="icon icon-right-arrow"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="hire__us_btn">
		    <a href="skype:sushanttrikha?chat" className="hire__us_Btn" target="_blank">Chat On Skype<span></span></a>
      </div>
    </>
  );
};

export default Navbar;
