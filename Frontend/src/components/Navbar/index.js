import { Link } from 'react-router-dom';
import "./index.css";

function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;