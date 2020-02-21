import React from "react"
import hero1 from "../images/hero/herp-1.jpg"
import "../styles/hero.css"

export default function Hero() {
  const heroStyle = {
    background: `linear-gradient(to bottom, rgba(0,0,0,0.8), transparent), url(${hero1})`,
  }
  return (
    <>
      <section className="section hero-section set-bg" style={heroStyle}>
        <div className="container">
          <div className="hero-text">
            <h2>Positive activity</h2>
            <h2>
              enhances <span>positive energy</span>
            </h2>
            <a href="" className="site-btn">
              Book Me Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
