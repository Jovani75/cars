import "./landing.css";
import Navbar from "../Navbar/Navbar";
import landingbg from "../../assets/landing-page/Frame.png";
import LandingCar from "../../assets/landing-page/car 2 1.png";
import ios from "../../assets/landing-page/ios.png";
import andriod from "../../assets/landing-page/andriod.png";

function Landing() {
  return (
    <>
      <div
        className="landing mw-100 overflow-hidden"
        style={{
          backgroundImage: `url(${landingbg})`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
        }}>
        <Navbar />
        <main className=" mt-5">
          <div className="row align-items-center">
            <div className="info col-md-6 ps-5">
              <h1 className="display-4 fw-bold">
                Find, book and <br />
                rent a car <span className="text-primary">Easily</span>
              </h1>
              <p className="lead text-muted">
                Get a car wherever and whenever you need it with your iOS and
                Android device.
              </p>
              <div className="download-app d-flex my-3">
                <button type="button" className="border-0 p-0">
                  <img src={andriod} alt="download app for andriod" />
                </button>
                <button type="button" className="border-0 p-0">
                  <img src={ios} alt="download app for andriod" />
                </button>
              </div>
            </div>
            <div className="image col-md-6">
              <img src={LandingCar} alt="LandingCar" className="img-fluid" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Landing;
