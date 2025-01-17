import React from 'react'
import "../css/styles.css"
import Link from 'next/link'


const About = () => {
  return (
    <div id='About'>
<>
  {/* <nav className="navbar bg-dark">
    <div className="container">
      <h1 className="logo lg-heading text-light">QH</h1>
      <ul className="nav-items">
        <li className="nav-items"></li>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="#About">About</a>
        </li>
        <li className="nav-item">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav> */}
  {/* <section className="about"> */}

    <div className="container">
      <h2 className="lg-heading text-black about-heading">About Us</h2>
      <p className="text-gray">
        Hello! I'm Qasim Front End Web Developer . I’m very passionate about the
        work that I do.
      </p>
      <h1 className="text-black">
        "Together we build dreams,embracing every challenge,turning vision into
        reality."
      </h1>
      <div className="about-wrapper">
        <div className="left">
          <ul>
            <li>Who We Are</li>
            <li>Mission</li>
            <li>Vision</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Values</li>
            <li>Experience</li>
            <li>Our Services</li>
          </ul>
        </div>
      </div>
      <div className="counts">
        <div className="count-item count-item1">
          <span>2500</span>
          <p>Travelled</p>
        </div>
        <div className="count-item count-item2">
          <span>25</span>
          <p>Places</p>
        </div>
        <div className="count-item count-item3">
          <span>400</span>
          <p>Guide</p>
        </div>
        <div className="count-item count-item4">
          <span>20</span>
          <p>Sport</p>
        </div>
      </div>
      <div className="cta-banner">
        <div className="cta-banner-left">
          <p className="cta-line">
            What are you waiting for, reach us right now
          </p>
        </div>
        <div className="cta-banner-right">
          <a href="#Contact" className="btn-cta">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  {/* </section> */}
</>

     </div> 
  )
}

export default About