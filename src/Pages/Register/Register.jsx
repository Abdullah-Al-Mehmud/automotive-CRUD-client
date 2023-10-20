import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleCreateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    if (!/[A-Z]/.test(password)) {
      setError("Must have one capital letter ");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setError("Must contain special character");
      return;
    } else if (password.length < 6) {
      setError("Must be upto 6 character");
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "Registration Successful !!", "success");
        form.reset();
        updateUser(name, photo).then().catch();

        navigate("/");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="bg-gray-900">
      <div className="">
        <div className="md:px-0 px-10">
          <div className="hero min-h-screen ">
            <div className=" flex-shrink-0 w-full max-w-lg rounded-xl my-20 bg-base-100">
              <form onSubmit={handleCreateUser} className="card-body  px-10">
                <h1 className="py-10 text-center  font-semibold text-4xl">
                  <span className=" "> Register </span> your account
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  font-bold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input text-[#ff7232] input-bordered bg-base-200 border-none outline-none text-sm font-bold"
                    required
                    name="name"
                  />
                  <label className="label">
                    <span className="label-text mt-4  font-bold">
                      Your Picture URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Picture URL"
                    className="input text-[#ff7232] input-bordered bg-base-200 border-none outline-none text-sm font-bold"
                    name="photo"
                  />
                  <label className="label">
                    <span className="label-text mt-4  font-bold">
                      Email address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="input text-[#ff7232] input-bordered bg-base-200 border-none outline-none text-sm font-bold"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  font-bold">Password</span>
                  </label>

                  <input
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input text-[#ff7232]  input-bordered bg-base-200 border-none outline-none text-sm font-bold relative"
                    required
                    name="password"
                  />
                  <div onClick={() => setShow(!show)} className="absolute">
                    {show ? (
                      <BiShowAlt className="absolute mt-[53px] md:ml-96 ml-72"></BiShowAlt>
                    ) : (
                      <BiHide className="absolute mt-[53px] md:ml-96 ml-72"></BiHide>
                    )}
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#ff7232] text-white">
                    Register
                  </button>
                </div>
                <div className="mt-4">
                  {error ? (
                    <p className="font-bold text-red-500">{error}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-center mt-4">
                  <p className="font-bold ">
                    Have an account ?{" "}
                    <Link to="/login" className=" text-[#ff7232] ">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
