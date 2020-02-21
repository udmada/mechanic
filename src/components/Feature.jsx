import React from "react"
import "../styles/feature.css"
import iconCPU from "../images/services/icon-cpu.png"
import iconBrake from "../images/services/icon-brake.png"
import iconEngine from "../images/services/icon-engine.png"
import iconExhaust from "../images/services/icon-exhaust.png"
import iconSteering from "../images/services/icon-steering.png"
import iconSuspension from "../images/services/icon-suspension.png"

export default function Feature() {
  return (
    <>
      <section className="feature-section" id="services">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2>
                  The real <span>power</span><br />starts here.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="icon-box-item">
                <div className="ib-icon">
                  <img src={iconCPU} alt="" />
                </div>
                <h4>CPU Diagnostics</h4>
                <p>
                  Donec nec sapien in urna fermentum ornare. Morbi vel ultrices
                  leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box-item">
                <div className="ib-icon">
                  <img src={iconSuspension} alt="" />
                </div>
                <h4>Suspension</h4>
                <p>
                  Donec nec sapien in urna fermentum ornare. Morbi vel ultrices
                  leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box-item">
                <div className="ib-icon">
                  <img src={iconEngine} alt="" />
                </div>
                <h4>Engine</h4>
                <p>
                  Donec nec sapien in urna fermentum ornare. Morbi vel ultrices
                  leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="icon-box-item">
                <div className="ib-icon">
                  <img src={iconBrake} alt="" />
                </div>
                <h4>Brakes</h4>
                <p>
                  Donec nec sapien in urna fermentum ornare. Morbi vel ultrices
                  leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box-item">
                <div className="ib-icon">
                  <img src={iconSteering} alt="" />
                </div>
                <h4>Steering</h4>
                <p>
                  Donec nec sapien in urna fermentum ornare. Morbi vel ultrices
                  leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box-item">
                <div className="ib-icon">
                  <img src={iconExhaust} alt="" />
                </div>
                <h4>Exhaust System</h4>
                <p>
                  Donec nec sapien in urna fermentum ornare. Morbi vel ultrices
                  leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
