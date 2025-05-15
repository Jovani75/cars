import Heading from "../Heading/Heading";
import Footer from "../Footer/Footer";
import Audi from "../../assets/landing-page/sec-5/Audi 1.png";
import vectorbg from "../../assets/landing-page/sec-5/Vector.png";
import snow from "../../assets/card/d8wxke_2_.png";
import doors from "../../assets/card/doors.png";
import frame from "../../assets/card/Frame.png";
import user from "../../assets/card/user.png";
import "./Cardetails.css";
import { Link } from "react-router-dom";

const reviews = { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 };

function CarDetails() {
  return (
    <>
      <div className="glass-header">
        <Link to="/home" className="back-button">
          ← Back to Home
        </Link>
      </div>

      <section className="car-details-section">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          {/* Car Visual */}
          <div
            className="car-visual fade-left"
            style={{ backgroundImage: `url(${vectorbg})` }}
          >
            <div className="car-glow" />
            <img src={Audi} alt="Audi Luxury" className="luxury-car" />
          </div>

          {/* Details */}
          <div className="car-content fade-right">
            <Heading
              title="Why Choose Us"
              sectionHead="Unleash the power of luxury with every rental"
            />
            <p className="lead text-muted mb-4 fst-italic">
              Our cars don’t just drive — they define presence.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <img src={user} alt="Passengers" />
                <span>{reviews.passNum} Passengers</span>
              </div>
              <div className="feature-card">
                <img src={frame} alt="Auto" />
                <span>Automatic</span>
              </div>
              <div className="feature-card">
                <img src={doors} alt="Doors" />
                <span>4 Doors</span>
              </div>
              <div className="feature-card">
                <img src={snow} alt="AC" />
                <span>Air Conditioning</span>
              </div>
            </div>

            <div className="cta-book mt-5">
              <button className="book-now-btn">Book This Car</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CarDetails;
