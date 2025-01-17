import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <div>
<>
  <header className="header">
    <nav className="navbar">
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
    </nav>
    <div className="header-content">
      <h1 className="lg-heading text-light">Travel the world</h1>
      <p className="text-light">
        travel the world, experience the greatness, its the best gift given by
        nature
      </p>
      <a href="#explore-places" className="btn btn-primary text-red md-headng">
        Explore Places
      </a>
    </div>
  </header>
  <section className="showcase" id="explore-places">
    <div className="container">
      <div className="row row1">
        <div className="img-box">
          <img src="./images/showcase-photo3.jpg" alt="Image Description" />
        </div>
        <div className="text-box">
          <h2 className="lg-heading text-black">DEGANVY, U.K</h2>
          <p className="text-gray">
            {" "}
            Deganvy, U.K. is a contemporary British fashion brand offering
            elegant and versatile clothing. Known for its high-quality fabrics
            and sophisticated designs, it caters to those who value style and
            comfort. Deganvy brings a modern twist to classic fashion, perfect
            for any occasion.
          </p>
          <a href="./about.html" className="btn btn-secondary">
            More
          </a>
        </div>
      </div>
      <div className="row row2">
        <div className="img-box">
          <img src="./images/showcase-photo1.jpg" alt="Image Description" />
        </div>
        <div className="text-box">
          <h2 className="lg-heading text-black">DESERT, EGYPT</h2>
          <p className="text-gray">
            Desert Egypt offers immersive adventures through Egypt's captivating
            deserts. With guided tours, it reveals the beauty of vast sand
            dunes, historic sites, and local culture. The company ensures an
            authentic experience for travelers seeking to explore Egypt's
            natural wonders.
          </p>
          <a href="#About" className="btn btn-secondary">
            More
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="features">
    <div className="container">
      <div className="box-wrapper">
        <div className="box box-1">
          <i className="fas fa-route fa-2x text-red" />
          <h2 className="md-heading">Adventure</h2>
          <p>
            "Embark on a thrilling journey filled with excitement and wonder.
            Unleash your adventurous spirit and create stories that last a
            lifetime."
          </p>
        </div>
        <div className="box box-2">
          <i className="fas fa-strikethrough fa-2x" />
          <h2 className="md-heading">Less Price</h2>
          <p>
            "Adventure awaits without the hefty price tag! Discover thrilling
            experiences that fit your budget and fuel your passion for
            exploration."
          </p>
        </div>
        <div className="box box-3">
          <i className="fas fa-user-check fa-2x text-red" />
          <h2 className="md-heading">Experience</h2>
          <p>
            {" "}
            "Step into a world of unforgettable moments and lasting memories.
            Experience the thrill of discovery and the joy of truly living every
            day."
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* <footer className="footer">
    <div className="social-media-links">
      <i className="fab fa-facebook fa-4x" />
      <i className="fab fa-twitter fa-4x" />
      <i className="fab fa-instagram fa-4x" />
    </div>
    <p>World Travel © 2024, All Rights Reserved</p>
  </footer> */}
</>

    </div>
  )
}

export default Index