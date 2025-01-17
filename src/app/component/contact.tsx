import React from 'react'
import "../css/styles.css"
import Link from 'next/link'


const Contact = () => {
  return (
    <div id='Contact'>
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


  <section className="contact-form">
    <div className="container">
      <div className="form-wrapper">
        <div className="company-address">
          <div className="address-group">
            <i className="fas fa-map-marker-alt fa-3x text-red" />
            <h2 className="text-gray md-heading">Location</h2>
            <p>R-76 Sector 2 North Karachi</p>
          </div>
          <div className="address-group">
            <i className="far fa-envelope fa-3x text-red" />
            <h2 className="text-gray md-heading">Email</h2>
            <p>qasim.hussain2410@gmail.com</p>
          </div>
          <div className="address-group">
            <i className="fas fa-phone-square-alt fa-3x text-red" />
            <h2 className="text-gray md-heading">Phone No</h2>
            <p>03152845159</p>
          </div>
          <img src="./images/company-img.jpg" alt="Company Image" />
        </div>
        <div className="form form">
          <h1 className="lg-heading text-black">Contact Us</h1>
          <p className="text-gray">
            Let us know your questions, suggestions and concerns by filling out
            the contact form below.
          </p>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Message</label>
            <textarea name="" id="message" defaultValue={""} />
          </div>
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <div className="social-media-links">
      <i className="fab fa-facebook fa-4x" />
      <i className="fab fa-twitter fa-4x" />
      <i className="fab fa-instagram fa-4x" />
    </div>
    <p>World Travel © 2024, All Rights Reserved</p>
  </footer>
</>

     </div> 
  )
}

export default Contact