import React from "react"
import "../styles/footer.css"
import footerImg from "../images/footer-img.jpg"
import addressIconYellow from "../images/icons/1.png"
import squirtImg from "../images/MK-10336.gif"
import phoneIconYellow from "../images/icons/2.png"
import emailIconYellow from "../images/icons/3.png"

export default function Footer() {
  const copyrightYear = new Date().getFullYear()
  const footerStyle = {
    background: `url(${footerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  return (
    <>
      <footer className="footer-section overlay" style={footerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Location</h4>
                <div className="fw-info-box">
                  <img src={addressIconYellow} alt="" />
                  <div className="fw-info-text">
                    <p>25 Example Lane, Somerfiled, Christchurch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Subscriptions</h4>
                <div className="fw-info-box">
                  <img src={phoneIconYellow} alt="" />
                  <div className="fw-info-text">
                    <p>021 042 7652</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>E-mail</h4>
                <div className="fw-info-box">
                  <img src={emailIconYellow} alt="" />
                  <div className="fw-info-text">
                    <p>contact@codos.co.nz</p>
                    <p>codos.co.nz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Social Media</h4>
                <div className="fw-info-box">
                  <a href="https://www.squirt.org">
                    <img src={squirtImg} alt="squirt" />
                  </a>
                  <div className="social-links">
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-2 order-md-1">
              <div className="copyright">
                Copyright &copy; {copyrightYear} All rights reserved | This site
                is made with ♥ by <a href="https://codos.co.nz">CODOS </a>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <ul className="footer-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#aboutus">About Us</a>
                </li>
                <li>
                  <a href="#services">Our Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
