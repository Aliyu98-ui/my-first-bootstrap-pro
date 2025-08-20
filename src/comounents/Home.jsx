import face from "../assets/face.png";
import istagram from "../assets/istagram.png";
import xicon from "../assets/xicon.png";
import linkedin from "../assets/linkedin.png";
import briefcase from "../assets/briefcase.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdowns from "./Dropdowns";

function Home() {
  const [selectedValue, setSelectedValue] = useState(false); // Initial state

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <section className="top-section ">
        <nav className="navbar navbar-expand-lg fixed-top">
          
          <div className="container-fluid  ">
            <Link to="/dropdown" className="navbar-brand text-white ">
              ANYAR
            </Link>

            <button
              className="navbar-toggler "
              type="button"
             
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            

            <div
              className="collapse navbar-collapse justify-content-center
"
              id="navbarNav"
            >
              <ul className="navbar-nav nav-pills" >
                <li className="nav-item">
                  <Link to="/" className="nav-link active text-white"  aria-current="page" title="Home">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white" title="About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link text-white" title="Services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link text-white" title="Portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/team" className="nav-link text-white" title="Team">
                    Team
                  </Link>
                </li>

                <select
                  className="nav dropdown"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  <option className="nav-link">Dropdown</option>
                  <option className="nav-link" value="option1">
                    Pricing
                  </option>
                  <option className="nav-link" value="option2">
                    Services
                  </option>
                  <option className="nav-link" value="option3">
                    Portfolio
                  </option>
                </select>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-white" title="Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end mx-auto">
              <img
                src={xicon}
                className="img-thumbnail"
                alt="icon"
                width={15}
                height={15}
              />
              <img
                src={face}
                className="img-thumbnail"
                alt="face"
                width={15}
                height={15}
              />
              <img
                src={istagram}
                className="img-"
                alt="istagram"
                width={15}
                height={15}
              />
              <img
                src={linkedin}
                className="img-thumbnail"
                alt="linkdin"
                width={15}
                height={15}
              />
            </div>
          </div>
        
          
         
        </nav>
        <div className="container-fluid p-5  text-white text-center">
          <h2>Welcome to Anyar Occaecati </h2>
          <h2>aliquam et in ut ommnis</h2>
          <p>
            Blanditiis praesentium aliquam illum tempore incidunt debitis
            dolorem bagni.
          </p>
          <p>est deserunt sed qui libero. Qui voluptas amet</p>
          <Link to="/Services">
            <button
              type="button "
              className="btn rounded-4 text-white bg-primary"
            >
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <div className="container-fluid mt-3 text-center">
        <h1>About</h1>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit.
        </p>
        <div className="row text-start mb-6">
          <div className="col-sm-5 p-4">
            <h2 className="text-start mb-5">
              Voluptatem dignissimos provident quasi
            </h2>
            <p className="text-start mb-5">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
            <Link to="/About">
              <button
                type="button "
                className="btn rounded-5 text-white bg-primary"
              >
                ABOUT US
              </button>
            </Link>
          </div>
          <div className="col-sm-7 p-3 text-white text-start">
            <div className="row">
              <div className="col-sm-6">
                <div className="card ">
                  <img
                    src={briefcase}
                    className="thumbnail"
                    alt="icon"
                    width={80}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Corporis voluptates</h5>
                    <p className="card-text">
                      Consequuntur sunt aut qussi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <img
                    src={briefcase}
                    className="thumbnail"
                    alt="icon"
                    width={80}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-sm-6 g-3">
                <div className="card">
                  <img
                    src={briefcase}
                    className="thumbnail"
                    alt="icon"
                    width={80}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 g-3">
                <div className="card">
                  <img
                    src={briefcase}
                    className="thumbnail"
                    alt="icon"
                    width={80}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
