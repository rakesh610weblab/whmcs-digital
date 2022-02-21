import React from 'react';

const GetintouchForm = () => {
    return (
        <>
            <form className="get_form" action="" name="contactus" id="contactus">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Full Name" required=""/>
                      </div>
                      <div className="form-group">
                        <label>Email Adress</label>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required=""/>
                      </div>
                      <div className="form-group">
                        <label>Comment</label>
                        <textarea className="form-control" name="comment" placeholder="Hi there, I would like to ..."></textarea>
                      </div>
    
                      <div className="form-group">
                        <button className="default_btn" type="submit">SEND NOW</button>
                        <div id="message"></div>
                      </div>
                    </form>
        </>
      ); 
};

export default GetintouchForm;
