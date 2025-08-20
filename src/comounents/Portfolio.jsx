import React from "react";
import { Link } from "react-router-dom";
import handwatch from "../assets/handwatch.png";
import camera from "../assets/camera.png";
import ligbulb from "../assets/ligbulb.png";

function Portfolio() {
  return (
    <>
      <section className="top-section">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid  ">
            <div
              className="collapse navbar-collapse justify-content-center
          "
              id="navbarNav"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link text-white">
                    Services
                  </Link>
                </li>
                <li className="nav-item nav-pills">
                  <Link to="/portfolio" className="nav-link active text-white">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/team" className="nav-link text-white">
                    Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <div className="container-fluid text-center mt-3 ">
        <h2 className="port">Portfolio</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div className="col">
            <div className="card">
              <img src={handwatch} className="card-img-top" alt="icon" />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={camera} className="card-img-top" alt="icon" />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ligbulb} className="card-img-top" alt="icon" />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
