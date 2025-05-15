import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import location from "../../assets/landing-page/location.png";
import car1 from "../../assets/landing-page/car1.png";
import car2 from "../../assets/landing-page/car2.png";
import car3 from "../../assets/landing-page/car2.png";
import car4 from "../../assets/landing-page/car3.png";
import star from "../../assets/card/star.png";
import snow from "../../assets/card/d8wxke_2_.png";
import arrowRight from "../../assets/card/arrow-right.png";
import doors from "../../assets/card/doors.png";
import frame from "../../assets/card/Frame.png";
import user from "../../assets/card/user.png";
import Heading from "../Heading/Heading";
import "./search-cars.css";

function SearchCars() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const carimgs = [car1, car2, car3, car4];
  const reviews = [
    { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
    { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
    { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
    { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  ];

  const searchHandler = (e) => {
    const carinput = e.target.value;
    setSearch(carinput);
    if (carinput === "") {
      setFilteredCars(cars);
    } else {
      const filteredCar = cars.filter((car) =>
        car.car.toLowerCase().includes(carinput.toLowerCase())
      );
      setFilteredCars(filteredCar);
    }
  };

  const getCars = async () => {
    const res = await axios.get("https://myfakeapi.com/api/cars/");
    const data = res.data.cars.splice(0, 4);
    setCars(data);
    setFilteredCars(data);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <section className="search-car-sec container py-4">
      <div className="search-box glassy d-flex align-items-center px-3 py-3 mb-4">
        <img src={location} alt="Location" />
        <input
          type="text"
          placeholder="Search your dream car..."
          className="form-control border-0 mx-3 search-input"
          onChange={searchHandler}
          value={search}
        />
        <button className="btn fancy-btn px-4 rounded-5">Search</button>
      </div>

      <Heading title="Popular Rental Deals" sectionHead="Most popular cars rental deals" />

      <div className="row mt-4">
        {filteredCars.map((car, i) => (
          <div className="col-md-6 col-lg-3 mb-4" key={car.id}>
            <div className="car-card fancy-card rounded-4 fade-in">
              <img src={carimgs[i]} className="img-fluid car-img" alt={car.car} />
              <div className="p-3">
                <h5 className="car-title">{car.car} {car.car_model}</h5>
                <div className="rev-box mb-2 d-flex align-items-center">
                  <img src={star} alt="star" className="me-2" />
                  <span>{reviews[i].starCount}</span>
                  <small className="text-muted ms-2">{reviews[i].revNum}</small>
                </div>
                <div className="features mb-3">
                  <p><img src={user} alt="" /> {reviews[i].passNum} Passengers</p>
                  <p><img src={frame} alt="" /> Auto</p>
                  <p><img src={doors} alt="" /> 4 Doors</p>
                  <p><img src={snow} alt="" /> A/C</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Price</span>
                  <span className="fw-bold">{car.price} <span className="fw-normal text-muted">/day</span></span>
                </div>
                <Link to="/car-details" className="btn fancy-btn w-100 d-flex justify-content-center align-items-center gap-2">
                  Rent Now <img src={arrowRight} alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/allcars" className="btn btn-outline-dark px-4 rounded-pill mt-3">
          Show All Cars <i className="fa-solid fa-arrow-right ms-2"></i>
        </Link>
      </div>
    </section>
  );
}

export default SearchCars;
