import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: component, ...rest }) => {
  // const token = localStorage.getItem("token");

  // return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;