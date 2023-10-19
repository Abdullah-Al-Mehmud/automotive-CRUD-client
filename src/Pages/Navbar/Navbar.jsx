import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff7232]" : ""
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff7232]" : ""
          }>
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff7232]" : ""
          }>
          My Cart
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    // logout user
    logOutUser().then().catch();
  };
  return (
    // <div className="navbar items-center bg-base-100">

    <div className="flex justify-around items-center ">
      <div>
        <img className="h-24" src="/images/logo.png" alt="" />
      </div>
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 font-bold ">{links}</ul>
      </div>
      <div>
        <div className="navbar-end ">
          {/*  */}
          {user ? (
            <div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user?.photoURL ? user?.photoURL : "/images/user.png"}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="font-bold">{user?.displayName}</a>
                  </li>
                  <li>
                    <a className="font-bold" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-5">
              <Link to="/login" className="px-6 py-2 bg-[#ff7232] text-white">
                LogIn
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 bg-[#ff7232] text-white">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
