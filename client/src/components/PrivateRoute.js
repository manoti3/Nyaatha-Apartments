import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, allowedRole }) => {
  const role = localStorage.getItem("role");
  return role === allowedRole ? element : <Navigate to="/" replace />;
};

export default PrivateRoute;
