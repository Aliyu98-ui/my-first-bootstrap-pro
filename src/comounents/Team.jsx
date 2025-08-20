import React from "react";
import imagesp from "../assets/imagesp.png";
import imagep from "../assets/imagep.png";
import { Link } from "react-router-dom";

function Team() {
  return (
    <>
      <section className="top-section fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid ">
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
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link text-white">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item nav-pills">
                  <Link to="/team" className="nav-link active text-white">
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
      <div className="container-fluid fw-light font-family-Arial">
        <h2 className="text-center fw-light mb-3">Teams and people</h2>
        <p className="text-center m-0">
          Even the best technology needs the best people with the right spirit
          behind it. right across the world.
        </p>
        <p className="text-center m-0">
          we have a team of dreamers and doers just like you. ready to help
          bring your ideas to life.
        </p>
        <p className="text-center">Here are the folks leading the charge</p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4 ">
            <div className="card">
              <div className="card-body text-center">
                <img
                  src={imagesp}
                  className="rounded-circle d-inline"
                  alt="image"
                />
                <h5 className="card-title mt-3">Bringing our ideals to life</h5>
                <p className="card-text fw-light">
                  'As head of the company, my job is to ensure everyone is
                  focused and aligned with a single goal of bringing a free and
                  open internet to everyone'
                </p>
                <Link to="/Readmore">
                  <h6 className="text-danger text-decoration-none">
                    Read more
                  </h6>
                </Link>

                <h5>Richard Kirkendall</h5>
                <h6 className="card-text fw-light">Chief Executive Officer</h6>
              </div>
            </div>
          </div>

          <div className="col-sm-4 ">
            <div className="card">
              <div className="card-body text-center">
                <img
                  src={imagep}
                  className="rounded-circle d-inline"
                  alt="image"
                />
                <h5 className="card-title mt-3 text-dark">
                  Enabling our future
                </h5>
                <p className="card-text fw-light">
                  My number one job is getting things done. i focus on
                  supporting the broader Namecheap team so that we can offer the
                  best service possible.
                </p>
                <Link to="/Readmore">
                  <h6 className="text-danger text-decoration-none">
                    Read more
                  </h6>
                </Link>
                <h5>Hillan Klein</h5>
                <h6 className="card-text fw-light">Chief Operating officer</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-center ">
                <img
                  src={imagesp}
                  className="rounded-circle d-inline"
                  alt="image"
                />
                <h5 className="card-title mt-3">Humanizing technology</h5>
                <p className="card-text fw-light">
                  Through my passion for enhancing the interaction between
                  people and technology. i oversee Namecheap's technology
                  strategy and infrastructure.
                </p>
                <Link to="/Readmore">
                  <h6 className="text-danger text-decoration-none">
                    Read more
                  </h6>
                </Link>
                <h5>Sergii smirnov</h5>
                <h6 className="card-text fw-light">Chief Technology Officer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
