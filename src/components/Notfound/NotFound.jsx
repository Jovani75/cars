import { Link } from "react-router-dom";
import Notfound from "../../assets/not-found/404-not-found.png";
import Footer from "../Footer/Footer";

function NotFound() {
  return (
    <>
      <button className="btn btn-primary my-5 ms-5">
        <Link to="/home" className="text-decoration-none text-white">
          Back to Home
        </Link>
      </button>
      <div className="image w-100 d-flex align-items-center justify-content-center">
        <img className="img-fluid h-50 w-50" src={Notfound} alt="404" />
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
