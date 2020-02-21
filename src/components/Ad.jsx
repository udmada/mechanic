import React from "react"
import "../styles/ad.css"
import checkIcon from "../images/check-icon.png"

export default function Ad() {
  return (
    <>
      <section className="add-section set-bg" data-setbg="img/add-bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 ml-auto">
              <div className="add-text">
                <h2>
                  Book now and get a 10% <span>Discount</span>
                </h2>
                <ul>
                  <li>
                    <img src={checkIcon} alt="check icon" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    <img src={checkIcon} alt="check icon" />
                    Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </li>
                  <li>
                    <img src={checkIcon} alt="check icon" />
                    Ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                  </li>
                </ul>
                <a href="/" className="site-btn">
                  Make An Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
