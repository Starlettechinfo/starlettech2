import React, { useState } from "react";
import Loc from "../assets/location.png";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import "../style/contact/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg">
        <div className="contact-container">
          <div className="contact-item con-first">
            <h1 className="con-title">Get in Touch</h1>
            <div className="con-container">
              <div className="con-box">
                <div className="con-image">
                  <img src={Loc} alt="Location" />
                </div>
                <div className="add-info">
                  <div className="con-top">
                    <h4 className="add">Address: </h4>
                    <p className="p-1">198 west 21th</p>
                  </div>
                  <p className="p-1">198 west 21th street, 721 joburg</p>
                  <p className="p-1">2190</p>
                </div>
              </div>

              <div className="sec-con-box">
                <div className="con-image">
                  <img src={Phone} alt="Phone us" />
                </div>
                <div className="info">
                  <h4>Phone: </h4>
                  <p className="p-2">+27 72 196 2692</p>
                </div>
              </div>

              <div className="sec-con-box box-3">
                <div className="con-image">
                  <img src={Email} alt="Email us" />
                </div>
                <div className="info">
                  <h4>Email: </h4>
                  <p className="p-2">mulanga@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className="contact-item con-second">
            <h1 className="heder">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="main-div">
                <div className="flex-d">
                  <div className="con-detail two">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="con-detail two">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="con-detail">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="con-detail">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    cols="20"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="send">
                  <button type="submit">Send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
