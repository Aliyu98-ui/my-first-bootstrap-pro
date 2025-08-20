import React from "react";
import briefcase from "../assets/briefcase.png";
import { Link } from "react-router-dom";

function Services() {
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
                  <Link to="/About" className="nav-link text-white">
                    About
                  </Link>
                </li>
                <li className="nav-item nav-pills">
                  <Link to="/services" className="nav-link active text-white">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link text-white">
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
      <div className="container-fluid mb-5 mt-3">
        <h2 className="text-center">Services</h2>
        <p className="text-center mt-3">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1">
            <img src={briefcase} className="thumbnail" alt="icon" width={80} />
          </div>
          <div className="col-sm-3">
            <h5>Lorem Ipsum</h5>
            <p>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
          </div>

          <div className="col-sm-1">
            <img src={briefcase} className="thumbnail" alt="icon" width={80} />
          </div>
          <div className="col-sm-3">
            <h5>Dolor Sitema</h5>
            <p>
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat tarad limino ate
            </p>
          </div>

          <div className="col-sm-1">
            <img src={briefcase} className="thumbnail" alt="icon" width={80} />
          </div>
          <div className="col-sm-3">
            <h5>Sed ut perspiciatis</h5>
            <p>
              Duis auta irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-1">
            <img src={briefcase} className="thumbnail" alt="icon" width={80} />
          </div>
          <div className="col-sm-3">
            <h5>Magni Dolores</h5>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              pfficia deserunt molestias excepturi sint occacati cupiditate non
              provident
            </p>
          </div>

          <div className="col-sm-1">
            <img src={briefcase} className="thumbnail" alt="icon" width={80} />
          </div>
          <div className="col-sm-3 ">
            <h5>Nemo Enim</h5>
            <p>
              At vero eos et accusamus et iusto adio dignissimos ducimus qui
              blanditiis praesentium voluptatum delenti atque
            </p>
          </div>

          <div className="col-sm-1">
            <img src={briefcase} className="thumbnail" alt="icon" width={80} />
          </div>
          <div className="col-sm-3">
            <h5>Eiusmod tempor</h5>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
