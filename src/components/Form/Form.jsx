import phone from "../../assets/landing-page/sec-7/iPhone-14.png";
import andriod from "../../assets/landing-page/andriod.png";
import ios from "../../assets/landing-page/ios.png";
import "./form.css";

function Form() {
  return (
    <section className="form-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Call to Action */}
          <div className="form-sec col-md-6 fade-in-left">
            <h2 className="fw-bold mb-4">
              Download the Rentcars App for <span className="text-primary text-uppercase">Free</span>
            </h2>

            <div className="download-app d-flex mb-4">
              <button type="button" className="app-btn mx-2">
                <img src={andriod} alt="Download on Android" />
              </button>
              <button type="button" className="app-btn mx-2">
                <img src={ios} alt="Download on iOS" />
              </button>
            </div>

            <form className="glass-form">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
              />
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button type="submit" className="send-btn mt-3">Send</button>
            </form>
          </div>

          {/* Right Side: Smartphone Display */}
          <div className="col-md-6 text-center fade-in-right mt-4 mt-md-0">
            <img src={phone} alt="Smartphone" className="phone-img img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
