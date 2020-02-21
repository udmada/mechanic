import React, {useState, useRef, useEffect}  from "react"
import "../styles/header.css"
import logoNavDark from "../images/logo-nav.png"
import logoNavLight from "../images/logo-nav-white.png"

export default function Header() {
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef(navBackground)
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  
  return (
    <>
      <header
        className={`main-header nav-fixed-top ${
          navBackground ? "nav-dark box-shadow" : "nav-light"
        }`}
      >
        <div className="container">
          <div className="mh-logo">
            <img className={`w-25 ${navBackground ? "nav-logo-dark" : "nav-logo-light"}`} src={logoNavDark} alt="logo of CODOS" />
            <img className={`w-25 ${navBackground ? "nav-logo-light" : "nav-logo-dark"} `} src={logoNavLight} alt="logo of CODOS" />
          </div>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
