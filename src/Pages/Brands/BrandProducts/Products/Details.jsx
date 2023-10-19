import { useLoaderData } from "react-router-dom";

const Details = () => {
  const carDetail = useLoaderData();
  const { photo, carType, price, ratings, description } = carDetail;

  return (
    <div>
      <img src={photo} alt="" />
      <div className="text-center">
        <p className="mt-4 font-bold">{description}</p>
        <h1 className="text-3xl font-bold mt-4">Car Type : {carType}</h1>
        <p className="text-3xl font-bold mt-4">Price : {price}$</p>
        <p className="text-3xl font-bold mt-4">Ratings : {ratings}</p>
        <div>
          <button className="px-6 py-2 my-5 text-white bg-[#ff7232]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
