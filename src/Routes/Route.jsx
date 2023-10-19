import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCart from "../Pages/AddCart/AddCart";
import MyCart from "../Pages/MyCart/MyCart";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Brands/BrandProducts/Products/Products";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Details from "../Pages/Brands/BrandProducts/Products/Details";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCart",
        element: <AddCart></AddCart>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/brandProduct/:name",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.name}`),
      },
      {
        path: "/brandProduct/:id",
        element: <Details></Details>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
