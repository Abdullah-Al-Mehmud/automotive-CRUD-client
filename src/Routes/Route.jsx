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
import PrivetRoute from "./PrivetRoute";
import Update from "../Pages/Update/Update";

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
        element: (
          <PrivetRoute>
            <AddCart></AddCart>
          </PrivetRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            "https://assignment-10-automotive-sever-cxnd7gcvd-mehmuds-projects.vercel.app/cart"
          ),
      },
      {
        path: "/brandProduct/:name",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-automotive-sever-cxnd7gcvd-mehmuds-projects.vercel.app/products/${params.name}`
          ),
      },
      {
        path: "/products1/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-automotive-sever-cxnd7gcvd-mehmuds-projects.vercel.app/products1/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <Update></Update>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-automotive-sever-cxnd7gcvd-mehmuds-projects.vercel.app/products1/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
