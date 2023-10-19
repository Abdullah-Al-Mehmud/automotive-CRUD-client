import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLoginUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login user
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire("Good job!", "Login Successful !!", "success");
        form.reset();
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Good job!", "Login Successful !!", "success");

        navigate("/");
      })
      .catch();
  };
  return (
    <div className="bg-gray-900">
      <div className="">
        <div className="md:px-0 px-10">
          <div className="hero min-h-screen ">
            <div className=" flex-shrink-0 w-full max-w-lg rounded-xl my-20 bg-base-100">
              <form onSubmit={handleLoginUser} className="card-body  px-10">
                <h1 className="py-10 text-center  font-semibold text-4xl">
                  <span className=" "> Login </span> your account
                </h1>
                <div className="form-control">
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
                  <button className="btn bg-[#ff7232] text-white">Login</button>
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
                    Don't have an account ?{" "}
                    <Link to="/register" className=" text-[#ff7232] ">
                      Register
                    </Link>
                  </p>
                </div>
                <h1 className="text-center font-bold">Also Login With</h1>
                <div className="flex justify-center mt-4">
                  <img
                    onClick={handleGoogleLogin}
                    className="h-10 cursor-pointer"
                    src="/images/google.png"
                    alt=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
