import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ logged, children }) => {
  return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
