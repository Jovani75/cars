import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import AllCars from "./components/Allcars/AllCars";
import CarDetails from "./components/Cardetails/CarDetails";
import Home from "./components/home/Home";
import NotFound from "./components/Notfound/NotFound";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: "true", element: <Home /> },
      { path: "home", element: <Home />},
      { path: "allcars", element: <AllCars /> },
      { path: "car-details", element: <CarDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
