import React from "react"
import staff1Img from "../images/staff/staff1.jpg"
import staff2Img from "../images/staff/staff2.jpg"
import staff3Img from "../images/staff/staff3.jpg"
import staff4Img from "../images/staff/staff4.jpg"
import "../styles/staff.css"

export default function Staff() {
  return (
    <>
      <section class="trainers-section" id="aboutus">
        <div class="container">
          <div class="section-title text-center">
            <h2>
              Meet the <span>Professionals</span>
            </h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="trainer-item">
                <div class="trainer-pic">
                  <img src={staff1Img} alt="" />
                </div>
                <h4>Michael Smith</h4>
                <p>
                  Vivamus libero mauris, bibendum eget sapien ac, ultrices
                  rhoncus ipsum nec sapien.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="trainer-item">
                <div class="trainer-pic">
                  <img src={staff2Img} alt="" />
                </div>
                <h4>Jess Black</h4>
                <p>
                  Ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum
                  ornare.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="trainer-item">
                <div class="trainer-pic">
                  <img src={staff3Img} alt="" />
                </div>
                <h4>James Brown</h4>
                <p>
                  Libero mauris, bibendum eget sapien ac, ultrices rhoncus
                  ipsum. Donec nec sapien.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="trainer-item">
                <div class="trainer-pic">
                  <img src={staff4Img} alt="" />
                </div>
                <h4>Paul Carlton</h4>
                <p>
                  Sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna
                  fermen-tum ornare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
