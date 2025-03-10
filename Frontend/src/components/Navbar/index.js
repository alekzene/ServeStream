import { Link } from 'react-router-dom';
import "./index.css";

function Navbar() {
  const toggleMode = () => {
    document.body.classList.toggle('dark');
  };

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
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/contact" className="button-primary btn-gradient">Book a Call</Link>
          <button className='mode-change' onClick={toggleMode}>
            <div className=''>
              <img src='images/mode-light.png' className='light-icon' alt='' />
              <img src='images/mode-dark.png' className='dark-icon hidden' alt='' />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;