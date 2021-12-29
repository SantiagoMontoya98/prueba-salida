import { Navigate } from "react-router-dom";

const PublicRoutes = ({ logged, children }) => {
  return logged ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
