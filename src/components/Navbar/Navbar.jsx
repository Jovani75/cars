import { Link } from "react-router-dom";
import logo from "../../assets/nav/logo.png";
import "./NavBar.css"; // هنضيف ملف CSS احترافي بعد كده

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Rent cars" className="navbar-logo" />
          <span className="brand-name ms-2"></span>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Become a renter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Rental deals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Why choose us
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-primary rounded-pill px-3">
              Sign in
            </Link>
            <Link to="/register" className="btn btn-primary rounded-pill px-3 text-white">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
