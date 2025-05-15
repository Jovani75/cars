import Heading from "../Heading/Heading";
import car from "../../assets/landing-page/car-icon.png";
import calender from "../../assets/landing-page/calender.png";
import location from "../../assets/landing-page/location.png";
import Audi from "../../assets/landing-page/audi.png";
import Ac from "../../assets/landing-page/ac.png";
import Jaguar from "../../assets/landing-page/jaguar.png";
import Nissan from "../../assets/landing-page/nissan.png";
import Volvo from "../../assets/landing-page/volvo.png";
import "./HowItWork.css"; // NEW

const workData = [
  {
    workTitle: "Choose location",
    workDesc: "Choose your and find your best car",
    workimg: location,
  },
  {
    workTitle: "Pick-up date",
    workDesc: "Select your pick up date and time to book your car",
    workimg: calender,
  },
  {
    workTitle: "Book your car",
    workDesc: "Book your car and we will deliver it directly to you",
    workimg: car,
  },
];

const brandsLogo = [
  { logo: Ac, altText: "ac" },
  { logo: Audi, altText: "audi" },
  { logo: Jaguar, altText: "jaguar" },
  { logo: Nissan, altText: "nissan" },
  { logo: Volvo, altText: "volvo" },
];

function HowItWork() {
  return (
    <>
      {/* Section: How it Works */}
      <section className="how-it-works text-center my-5 py-5">
        <div className="container">
          <Heading
            title="How It Work"
            sectionHead="Rent With Following 3 Working Steps"
          />
          <div className="row justify-content-center">
            {workData.map((work, i) => (
              <div className="col-md-4 mt-4 fade-in-up" key={i}>
                <div className="step-box p-4 rounded-4 shadow-sm h-100 hover-glow">
                  <img
                    src={work.workimg}
                    alt={work.workTitle}
                    className="step-icon mb-3"
                  />
                  <h5 className="fw-bold">{work.workTitle}</h5>
                  <p className="text-muted small">{work.workDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Brand Logos */}
      <section className="brand-logos py-4">
        <div className="container text-center">
          <div className="row justify-content-center align-items-center flex-wrap">
            {brandsLogo.map((brandLogo, i) => (
              <div className="col-auto mx-3 my-2 logo-fade" key={i}>
                <img
                  src={brandLogo.logo}
                  alt={brandLogo.altText}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWork;
