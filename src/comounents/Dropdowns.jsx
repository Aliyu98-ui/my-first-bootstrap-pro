
import { Link } from "react-router-dom"

function Dropdowns() {
  
  return (
          <div>
            <section className="top-section ">
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
                              <li className="nav-item nav-pills">
                                <Link to="/about" className="nav-link active text-white">
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
          </div>
  )
}
export default Dropdowns;
