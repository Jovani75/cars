import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import Pagination from "../Pagination/Pagination";

const carimgs = [
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car1,
  car2,
  car3,
  car4,
  car2,
];
const reviews = [
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
  { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
  { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
  { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
];

function AllCars() {
  // set data
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 12;

  let getCars = async () => {
    const res = await axios.get("https://myfakeapi.com/api/cars/");
    let data = res.data.cars.splice(0, 40);
    setCars(data);
  };

  useEffect(() => {
    getCars();
  }, []);

  const lastCarIndex = currentPage * carsPerPage;
  const firstCarIndex = lastCarIndex - carsPerPage;
  const currentCars = cars.slice(firstCarIndex, lastCarIndex);

  return (
    <>
      <button className="btn btn-primary my-5 ms-5">
        <Link to="/home" className="text-decoration-none text-white">
          Back to Home
        </Link>
      </button>
      <div className="container mt-3">
        <div className="row">
          <Heading
            title="Popular Rental Deals"
            sectionHead="Most popular cars rental deals"
          />
          {currentCars.map((car, i) => (
            <div className="col-md-6 col-lg-3 my-3" key={car.id}>
              <div className="card p-2 border-0 shadow">
                <img
                  src={carimgs[i]}
                  className="card-img-top px-3 py-2 img-fluid"
                  alt={car.car}
                />
                <div className="card-body">
                  <h5 className="card-title fs-5">
                    {car.car} {car.car_model}
                  </h5>
                  <p
                    className="rev-box d-flex align-items-center"
                    style={{ fontSize: "14px" }}>
                    <img src={star} alt="review" className="me-2" />
                    <span>{reviews[i].starCount}</span>
                    <span className="text-black-50 ms-1">
                      {reviews[i].revNum}
                    </span>
                  </p>
                  <div className="desc d-flex flex-wrap mb-3 text-start border-bottom">
                    <div
                      className="info d-flex justify-content-start text-black-50 w-100 mb-1"
                      style={{ fontSize: "12px" }}>
                      <span className="w-50">
                        <img className="me-1" src={user} alt="Passagers num" />
                        {reviews[i].passNum} Passanger
                      </span>
                      <span className="w-50">
                        <img className="me-1" src={frame} alt="auto" />
                        Auto
                      </span>
                    </div>
                    <div
                      className="info d-flex justify-content-start text-black-50 w-100 my-3"
                      style={{ fontSize: "12px" }}>
                      <span className="w-50">
                        <img className="me-1" src={doors} alt="Doors num" />4
                        Doors
                      </span>
                      <span className="w-50">
                        <img className="me-1" src={snow} alt="" />
                        Air conditioning
                      </span>
                    </div>
                  </div>
                  <div className="price text-black-50 mb-3 d-flex justify-content-between">
                    <span>Price</span>
                    <span className="text-black fw-bold">
                      {car.price}{" "}
                      <span className="text-black-50 fw-normal">/day</span>
                    </span>
                  </div>
                  <Link to="/car-details" className="btn btn-primary w-100">
                    Rent Now <img src={arrowRight} alt="go to car page" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <Pagination
            totalCars={cars.length}
            carsPerPage={carsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

export default AllCars;
