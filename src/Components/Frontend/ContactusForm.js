import React from 'react';

const ContactusForm = () => {
  return (
    <>
        <form action="" name="contactus" id="contactus">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Adress</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Service</label>
                    <div className="custom_select form-control">
                      <select required="" name="service">
                        <option selected="">Hosting website</option>
                        <option>WHMCS Setup</option>
                        <option>WHMCS Customization</option>
                        <option>Modules Development</option>
                        <option>Custom Theme Development</option>
                        <option>Server Administration</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Comment</label>
                    <textarea
                      className="form-control"
                      name="comment"
                      placeholder="Hi there, I would like to ..."
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <button className="default_btn" type="submit">
                      SEND NOW
                    </button>
                    <div id="message"></div>
                  </div>
                </form>
    </>
  );
};

export default ContactusForm;
