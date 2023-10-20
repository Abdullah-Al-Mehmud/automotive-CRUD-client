import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="flex h-screen justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivetRoute;
