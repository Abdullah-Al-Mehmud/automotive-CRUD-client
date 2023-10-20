import Swal from "sweetalert2";
const AddCart = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const carType = form.carType.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    const product = {
      photo,
      productName,
      brandName,
      carType,
      price,
      ratings,
      description,
    };

    // add products to database
    fetch(
      "https://assignment-10-automotive-sever-cxnd7gcvd-mehmuds-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Product Added Successfully !!", "success");
          form.reset();
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] text-center py-10 px-24">
      <h1 className="text-4xl font-semibold text-[#374151]">
        Add New <span className="text-[#ff7232]">Product</span>{" "}
      </h1>
      <div>
        {/* name and quantity */}
        <form onSubmit={handleAddProduct} className="mt-10">
          <div className="md:flex  gap-5 ">
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Photo Url"
                className="input input-bordered w-full "
                name="photo"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full "
                name="productName"
              />
            </div>
          </div>
          {/* supplier and taste */}

          <div className="md:flex mt-4 gap-5 ">
            <div className="md:w-1/2">
              <select
                name="brandName"
                className="select select-bordered w-full ">
                <option disabled defaultValue>
                  Choose Brand
                </option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Audi</option>
                <option>Jaguar</option>
                <option>Toyota</option>
                <option>Chevrolet</option>
              </select>
            </div>
            <div className="md:w-1/2">
              <select name="carType" className="select select-bordered w-full ">
                <option disabled defaultValue>
                  Choose Car Type
                </option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Sports Car</option>
                <option>Coupe</option>
              </select>
            </div>
          </div>

          {/* category and details */}

          <div className="md:flex mt-4 gap-5 ">
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Price"
                className="input input-bordered w-full"
                name="price"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Ratings Out of 5"
                className="input input-bordered w-full"
                name="ratings"
              />
            </div>
          </div>

          {/* Photo url */}

          <div className="md:flex mt-4  gap-10 ">
            <div className="md:w-full">
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered w-full"
                name="description"
              />
            </div>
          </div>
          <div className="mt-5">
            <input
              type="submit"
              value="Add Product"
              className="btn bg-[#ff7232] text-[white] text-lg font-bold btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCart;
