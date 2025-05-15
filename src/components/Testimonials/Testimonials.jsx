import testimonial1 from "../../assets/landing-page/sec-6/Rectangle 8 (1).png";
import testimonial2 from "../../assets/landing-page/sec-6/Rectangle 8 (1).png";
import star from "../../assets/card/star.png";
import { Carousel } from "react-bootstrap";
import "./testimonialsSlider.css";
import Heading from "../Heading/Heading";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      image: testimonial1,
      rating: 5.0,
      text: "I feel very secure when using caretail's services. Your customer care team is very enthusiastic and the driver is always on time.",
      name: "Charlie Johnson",
      location: "From New York, US",
    },
    {
      image: testimonial2,
      rating: 4.8,
      text: "Amazing service! Everything was perfect and on time. Will definitely recommend this to everyone I know.",
      name: "Jackson Ford",
      location: "From Los Angeles, US",
    },
  ];

  return (
    <div className="testimonials-section text-center py-5">
      <div className="container">
        <Heading title="Testimonials" sectionHead="What people say about us?" />
        <Carousel
          interval={4000}
          fade
          indicators={false}
          controls={true}
          pause="hover"
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-card animated-card d-flex align-items-center shadow rounded-4">
                <div className="testimonial-image">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="testimonial-rev px-4 text-start">
                  <h5 className="mb-2 rating-text">
                    <span className="fs-1 fw-bold text-primary">{testimonial.rating}</span> stars
                  </h5>
                  <div className="stars mb-2">
                    {[...Array(5)].map((_, i) => (
                      <img src={star} alt="Star" key={i} className="star" />
                    ))}
                  </div>
                  <p className="text-muted mb-4 fst-italic">"{testimonial.text}"</p>
                  <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                  <p className="text-muted">{testimonial.location}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
