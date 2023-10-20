import PropTypes from "prop-types";
import Swal from "sweetalert2";

const MyCartCard = ({ cart, myCart, setMyCart }) => {
  const { _id, brandName, photo, carType, price, ratings } = cart;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete cart form database
        fetch(
          `https://assignment-10-automotive-sever-cxnd7gcvd-mehmuds-projects.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myCart.filter((item) => item._id !== id);
              setMyCart(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-80" src={photo} alt={`${brandName} ${carType} car`} />
      </figure>
      <div className="card-body">
        <h2 className="font-bold ">Brand : {brandName}</h2>
        <p className="font-bold ">Car Type : {carType}</p>
        <p className="font-bold ">Price : {price}$</p>
        <p className="font-bold ">Ratings : {ratings}</p>
        <div className="mt-4">
          <button
            onClick={() => handleDelete(_id)}
            className="px-6 py-2 bg-[#ff7232] text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyCartCard.propTypes = {
  cart: PropTypes.object.isRequired,
  myCart: PropTypes.object.isRequired,
  setMyCart: PropTypes.array.isRequired,
};

export default MyCartCard;
