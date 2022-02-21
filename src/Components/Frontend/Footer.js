import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer_top">
            <div className="row">
              <div className="col-md-3">
                <Link to="/" className="footer_logo">
                  <img src="./images/footer_logo.png" alt="Logo" />
                </Link>
                <div className="address">
                  <p>
                    C-196/A, Times Square Building, Industrial Area Phase 8B,
                    SAS Nagar, Mohali, Punjab (INDIA) PIN- 160071
                  </p>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row" id="accordionExample">
                  <div className="col-md-3">
                    <div className="footer_menu" role="tablist" id="services">
                      <span>Our Services</span>
                      <ul
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="services"
                        data-parent="#accordionExample"
                      >
                        <li>
                          <Link to="/whmcs-setup">WHMCS Setup</Link>
                        </li>
                        <li>
                          <Link to="/whmcs-customization">
                            WHMCS Customization
                          </Link>
                        </li>
                        <li>
                          <Link to="/whmcs-modules-development">
                            Modules Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/whmcs-custom-theme-development">
                            Custom Theme Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/server-management-services">
                            Server Administration
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="footer_menu" role="tablist" id="quick">
                      <span>Quick Link</span>
                      <ul
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="quick"
                        data-parent="#accordionExample"
                      >
                        <li>
                          <a href="//www.whmcsdigital.com/blog/" target="_blank" rel="noreferrer">Blog</a>
                        </li>
                        <li>
                          <Link to="/about">About us</Link>
                        </li>
                        <li>
                          <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                          <Link to="/testimonial">Testimonial</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="footer_menu" role="tablist" id="contact">
                      <span>Contact us</span>
                      <ul
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="contact"
                        data-parent="#accordionExample"
                      >
                        <li>
                          <Link to="/contact">Contact us</Link>
                        </li>
                        <li>
                          <a href="//www.whmcsdigital.com/clientarea/submitticket.php?step=2&deptid=1" target="_blank" rel="noreferrer">Submit A Ticket</a>
                        </li>
                        <li>
                          <Link to="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/terms">Terms &amp; conditions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="footer_menu" role="tablist" id="resources">
                      <span>Resources</span>
                      <ul
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="resources"
                        data-parent="#accordionExample"
                      >
                        <li>
                          <a href="//www.whmcsdigital.com/clientarea/submitticket.php" target="_blank" rel="noreferrer">
                            Help us
                          </a>
                        </li>
                        <li>
                          <a href="//www.whmcsdigital.com/clientarea/index.php?rp=%2Flogin" target="_blank" rel="noreferrer">
                            Your Account
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_privacy">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="privacy_menu">
                  <ul>
                    <li>
                      <Link to="/privacy">Privacy &amp; Policy</Link>
                    </li>
                    <li> / </li>
                    <li>
                      <Link to="/terms">Terms</Link>
                    </li>
                    <li> / </li>
                    <li>
                      <Link to="/sitemap.xml">Site Map</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="social_icons">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/WHMCSDigital/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="icon icon-fb"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/whmcsdigital"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="icon icon-twitter"></span>
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
                        href="https://www.linkedin.com/company/whmcsdigital/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="icon icon-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4>© 2015 - 2021 WHMCS Digital. All Rights Reserved.</h4>
                  <p>
                    WHMCS Digital is a 3rd party development site for WHMCS and
                    a registered entity in INDIA.<br></br>WHMCS Digital is a
                    separate entity from WHMCS Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
