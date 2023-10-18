import { useEffect, useState } from "react";
import BrandProducts from "./BrandProducts/BrandProducts";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-20 lg:px-5 md:px-5 px-10">
        {brands.map((brand) => (
          <BrandProducts key={brand.id} brand={brand}></BrandProducts>
        ))}
      </div>
    </div>
  );
};

export default Brands;
