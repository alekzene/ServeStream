import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo font-lexend font-bold">
          <img src="images/star.png" alt="logo" />
          ServeStream
        </Link>
        <div className="nav-menu">
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/portfolio" className="nav-link">Contact Us</Link>
          <Link to="/contact" className="button-primary btn-gradient">Book a Call</Link>
          <button className="mode-change" onClick={() => setDarkMode(!darkMode)}>
            <div>
              <img src="images/mode-light.png" className={`light-icon ${darkMode ? "hidden" : ""}`} alt="Light Mode" />
              <img src="images/mode-dark.png" className={`dark-icon ${darkMode ? "" : "hidden"}`} alt="Dark Mode" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
