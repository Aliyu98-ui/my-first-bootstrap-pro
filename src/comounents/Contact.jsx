import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section className="top-section">
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
                <li className="nav-item ">
                  <Link to="/team" className="nav-link text-white">
                    Team
                  </Link>
                </li>

                <li className="nav-item nav-pills">
                  <Link to="/contact" className="nav-link text-white active">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="main-body mt-4">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card1">
                <div className="card-body">
                  <h2 className="card-title text-white mb-5">CONTACT US</h2>
                  <p className="card-text">
                    Fill out and submit the form and someone from our team will
                    reach out soon after.
                  </p>
                  <p className="card-text mb-5">You might be looking for:</p>
                  <ul className="card-text">
                    <li className="card-text">
                      A live demo? <samp>Clike Here.</samp>
                    </li>
                    <li className="card-text mb-8">
                      Support? Head over to our Help Center.
                      <samp>Clike Here.</samp>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card1">
                <div className="card-body">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      First Name:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="firstname"
                    />
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Last Name:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="lastname"
                    />
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Company Name:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="companyname "
                    />
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Work Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      How can we help you:
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      id="comment"
                      name="text"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning form-control mb-3"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
