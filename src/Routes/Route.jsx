import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCart from "../Pages/AddCart/AddCart";
import MyCart from "../Pages/MyCart/MyCart";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Brands/BrandProducts/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    ],
  },
]);

export default router;
