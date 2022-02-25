import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactusForm = () => {
  const SERVICE_ID = "service_9dhehpr";
  const TEMPLATE_ID = "template_1urc2g8";
  const USER_ID = "user_hAeKHppjv1vV4XEelPZGw";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, phone, service, message } = data;
    try {
      const templateParams = {
        name,
        email,
        phone,
        service,
        message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="contactForm">
        <form id="contactus" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
              className="form-control formInput"
              placeholder="Full Name"
            ></input>
            {errors.name && (
              <span className="errorMessage">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="form-control formInput"
              placeholder="Email Address"
            ></input>
            {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Please enter a phone no.",
                },
              })}
              className="form-control formInput"
              placeholder="Phone Number"
            ></input>
            {errors.phone && (
              <span className="errorMessage">{errors.phone.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Service</label>
            <div className="custom_select form-control">
              <select
                name="service"
                {...register("service", {
                  required: {
                    value: true,
                    message: "Please Select service",
                  },
                })}
              >
                <option selected="">Hosting website</option>
                <option>WHMCS Setup</option>
                <option>WHMCS Customization</option>
                <option>Modules Development</option>
                <option>Custom Theme Development</option>
                <option>Server Administration</option>
              </select>
            </div>
            {errors.service && (
              <span className="errorMessage">{errors.service.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Comment</label>
            <textarea
              rows={3}
              name="message"
              {...register("message", {
                required: true,
              })}
              className="form-control formInput"
              placeholder="Hi there, I would like to ..."
            ></textarea>
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
          </div>
          <div className="form-group">
            <button className="default_btn submit-btn" type="submit">
              SEND NOW
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />

      {/* <form action="" name="contactus" id="contactus">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" name="name" placeholder="Full Name" required=""/>
        </div>
        <div className="form-group">
          <label>Email Adress</label>
          <input type="email" className="form-control" name="email" placeholder="Email Address" required=""/>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" name="phone" placeholder="Phone Number" required=""/>
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
          <textarea className="form-control" name="comment" placeholder="Hi there, I would like to ..."></textarea>
        </div>

        <div className="form-group">
          <button className="default_btn" type="submit"> SEND NOW </button>
          <div id="message"></div>
        </div>
      </form> */}
    </>
  );
};

export default ContactusForm;
