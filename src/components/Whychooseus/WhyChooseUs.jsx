import Heading from "../Heading/Heading";
import Audi from "../../assets/landing-page/sec-5/Audi 1.png";
import vectorbg from "../../assets/landing-page/sec-5/Vector.png";
import chat from "../../assets/landing-page/sec-5/chat.png";
import message from "../../assets/landing-page/sec-5/message.png";
import user from "../../assets/landing-page/sec-5/user.png";
import "./Whychooseus.css"

const offers = [
  {
    offerIcon: user,
    offerTitle: "Best price guaranteed",
    offerDesc: "Find a lower price? Well refund you 100% of the difference.",
  },
  {
    offerIcon: message,
    offerTitle: "24 hour car delivery",
    offerDesc: "Book your car anytime and we will deliver it directly to you.",
  },
  {
    offerIcon: chat,
    offerTitle: "24/7 technical support",
    offerDesc: "Have a question? Contact Rentcars support any time when you have a problem.",
  },
];

function WhyChooseUs() {
  return (
    <>
      {/* Section: Why Choose Us */}
      <section className="why-choose-us py-5">
        <div className="sec5 d-flex">
          <div
            className="car-image me-lg-5 me-sm-0"
            style={{ backgroundImage: `url(${vectorbg})` }}>
            <img src={Audi} alt="Audi Car" className="img-fluid" />
          </div>
          <div className="content">
            <Heading
              title="Why Choose Us"
              sectionHead="We offer the best experience with our rental deals"
            />
            <ul className="list-unstyled">
              {offers.map((offer, i) => (
              <li className="d-flex align-items-start mb-3" key={i}>
                <div className="icon-box me-3">
                  <img
                    src={offer.offerIcon}
                    alt="Best price guaranteed"
                    className="icon"
                  />
                </div>
                <div className="offer">
                  <h5>{offer.offerTitle}</h5>
                  <p className="text-black-50">
                    {offer.offerDesc}
                  </p>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
