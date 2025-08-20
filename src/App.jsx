import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./comounents/Home";
import Portfolio from "./comounents/Portfolio";
import Services from "./comounents/Services";
import Pricing from "./comounents/Pricing";
import Contact from "./comounents/Contact";
import Team from "./comounents/Team";
import Readmore from "./comounents/Readmore";
import About from "./comounents/About";
import Dropdowns from "./comounents/Dropdowns";
import UserTest from "./comounents/UserTest";

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/readmore" element={<Readmore />} />
          <Route path="/about" element={<About />} />
          <Route path="/dropdown" element={<Dropdowns/>} />
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
