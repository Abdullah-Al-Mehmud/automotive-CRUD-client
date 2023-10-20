import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const Details = () => {
  const carDetail = useLoaderData();
  const { photo, carType, price, ratings, description, brandName } = carDetail;

  const handleAddToCart = (e) => {
    e.preventDefault();

    const carts = {
      photo,
      carType,
      price,
      ratings,
      description,
      brandName,
    };
    // add cart to database
    fetch(
      "https://assignment-10-automotive-sever-cxnd7gcvd-mehmuds-projects.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(carts),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Cart added SuccessFully !!", "success");
        }
      });
  };

  return (
    <div>
      <img src={photo} alt="" />
      <div className="text-center">
        <p className="mt-4 font-bold">{description}</p>
        <h1 className="text-3xl font-bold mt-4">Car Type : {carType}</h1>
        <p className="text-3xl font-bold mt-4">Price : {price}$</p>
        <p className="text-3xl font-bold mt-4">Ratings : {ratings}</p>
        <div>
          <form onSubmit={handleAddToCart}>
            <button
              type="submit"
              className="px-6 py-2 my-5 text-white bg-[#ff7232]">
              Add To Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
