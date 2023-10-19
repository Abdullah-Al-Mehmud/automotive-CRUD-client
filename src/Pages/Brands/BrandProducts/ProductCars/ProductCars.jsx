import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCars = ({ car }) => {
  const { _id, brandName, photo, productName, carType, price, ratings } = car;

  return (
    <div className="px-5">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="h-52 w-full" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h1 className="text-lg font-bold">Product : {productName}</h1>
          <h2 className="text-lg font-bold">Brand : {brandName}</h2>
          <p className="text-lg font-bold">Category : {carType}</p>
          <p className="text-lg font-bold">Price : {price}$</p>
          <p className="text-lg font-bold">Ratings : {ratings}</p>
          <div className="flex justify-around mt-4">
            <Link to={`/brandProduct/${_id}`}>
              <button className="px-6 py-2 text-white bg-[#ff7232] font-bold">
                Details
              </button>
            </Link>

            <button className="px-6 py-2 text-white bg-[#ff7232] font-bold">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCars.propTypes = {
  car: PropTypes.object.isRequired,
};

export default ProductCars;
