import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import HowItWork from "../Howitwork/HowItWork";
import Landing from "../Landing/Landing";
import SearchCars from "../Searchcars/SearchCars";
import Testimonials from "../Testimonials/Testimonials";
import WhyChooseUs from "../Whychooseus/WhyChooseUs";

function Home() {
  return (
    <>
      <Landing />
      <SearchCars />
      <HowItWork />
      <WhyChooseUs />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
