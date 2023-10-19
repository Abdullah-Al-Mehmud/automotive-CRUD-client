import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandProducts = ({ brand }) => {
  const { image, brand_name } = brand;
  return (
    <Link to={`/brandProduct/${brand_name}`}>
      <div>
        <div className="card card-compact w-fit bg-base-100 shadow-xl">
          <figure>
            <img className="h-60 w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl text-center font-bold py-5">
              {brand_name}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

BrandProducts.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default BrandProducts;
