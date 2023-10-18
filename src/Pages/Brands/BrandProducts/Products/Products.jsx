import { useLoaderData } from "react-router-dom";

const Products = () => {
  const carBrand = useLoaderData(null);
  return <div>products {carBrand.brandName}</div>;
};

export default Products;
