import "./footer.css";
import footerLogo from "../../assets/footer/logo-footer.png";
import location from "../../assets/footer/location.png";
import phone from "../../assets/footer/call.png";
import mail from "../../assets/footer/sms.png";
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import youtube from "../../assets/footer/youtube.png";

const CompanyAddresses = [
  {
    addIcon: location,
    addText: "25566 He.1, Glendale, Alaska, 99688, USA",
    addAlt: "location",
  },
  {
    addIcon: phone,
    addText: "+603 4784 273 12",
    addAlt: "phone",
  },
  {
    addIcon: mail,
    addText: "rentcars@gmail.com",
    addAlt: "mail",
  },
];

const products = ["Career", "Car", "Packages", "Features", "Priceline"];
const resources = [
  "Download",
  "Help Center",
  "Guides",
  "Partner Network",
  "Cruises",
  "Developer",
];
const aboutLinks = [
  "Why choose us",
  "Our Story",
  "Investor Relations",
  "Press Center",
  "Advertise",
];

function Footer() {
  return (
    <footer className="py-5 animated-footer">
      <div className="container">
        <div className="row">
          {/* Company Information */}
          <ul className="col-md-4 list-unstyled mb-4">
            <div className="mb-3">
              <img src={footerLogo} alt="logo" className="footer-logo" />
            </div>
            {CompanyAddresses.map((address, i) => (
              <li key={i} className="mb-2 d-flex align-items-start">
                <img className="me-2" src={address.addIcon} alt={address.addAlt} />
                <span>{address.addText}</span>
              </li>
            ))}
          </ul>

          {/* Links Sections */}
          <div className="col-lg-2 col-md-4 links mb-4">
            <h6 className="footer-title">Our Product</h6>
            <ul className="list-unstyled">
              {products.map((product, i) => (
                <li key={i} className="footer-link">{product}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 links mb-4">
            <h6 className="footer-title">Resources</h6>
            <ul className="list-unstyled">
              {resources.map((resource, i) => (
                <li key={i} className="footer-link">{resource}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 links mb-4">
            <h6 className="footer-title">About Rentcars</h6>
            <ul className="list-unstyled">
              {aboutLinks.map((aboutLink, i) => (
                <li key={i} className="footer-link">{aboutLink}</li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-2">
            <h6 className="footer-title mb-4">Follow Us</h6>
            <div className="d-flex gap-3 justify-content-start">
              <a href="#"><img src={instagram} alt="instagram" className="social-icon" /></a>
              <a href="#"><img src={facebook} alt="facebook" className="social-icon" /></a>
              <a href="#"><img src={youtube} alt="youtube" className="social-icon" /></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0 text-light small">&copy; 2024 - Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
