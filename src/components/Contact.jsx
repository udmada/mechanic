import React from "react"
import "../styles/contact.css"
import addressIconBlack from "../images/icons/1-dark.png"
import phoneIconBlack from "../images/icons/2-dark.png"
import emailIconBlack from "../images/icons/3-dark.png"
import contactBannerImg from "../images/contact-banner-bg.jpg"

export default function Contact() {
  const contactStyle = {
    background: `url(${contactBannerImg})`,
  }
  return (
    <>
      <section
        class="page-top-section set-bg overlay-light"
        style={contactStyle} id="contact"
      >
        <div class="container">
          <h2>Contact</h2>
        </div>
      </section>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="contact-title">Contact Info</h2>
              <div className="contact-info-warp">
                <h4>Location</h4>
                <div className="contact-info">
                  <img src={addressIconBlack} alt="" />
                  <div className="cf-text">
                    <p>25 Example Lane, Somerfiled, Christchurch</p>
                  </div>
                </div>
              </div>
              <div className="contact-info-warp">
                <h4>Phone</h4>
                <div className="contact-info">
                  <img src={phoneIconBlack} alt="" />
                  <div className="cf-text">
                    <p>021 042 7652</p>
                  </div>
                </div>
              </div>
              <div className="contact-info-warp">
                <h4>E-mail</h4>
                <div className="contact-info">
                  <img src={emailIconBlack} alt="" />
                  <div className="cf-text">
                    <p>contact@codos.co.nz</p>
                    <p>codos.co.nz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h2 className="contact-title">Get in touch</h2>
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Your e-mail" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button className="site-btn">Make an Appointment</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1023.0163814713213!2d172.63507551791534!3d-43.51219610122856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318bcdbe920c7b%3A0x598d07fbe35864bd!2s25%20Trafalgar%20Street%2C%20St%20Albans%2C%20Christchurch%208014!5e0!3m2!1sen!2snz!4v1582261608890!5m2!1sen!2snz"            style={{ border: "0" }}
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  )
}
