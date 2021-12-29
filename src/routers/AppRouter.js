import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compra from "../components/Compra";
import Login from "../components/Login";
import Politicas from "../components/Politicas";
import Registro from "../components/Registro";
import Home from "../containers/Home";
import { GlobalStyles } from "../styles/GlobalStyles";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        //console.log(user);
        //dispatch(loginEmailPassword(user.uid, user.displayName));
        setLogged(true);
      } else {
        setLogged(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home logged={logged} />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route
          path="login"
          element={
            <PublicRoutes logged={logged}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="registro"
          element={
            <PublicRoutes logged={logged}>
              <Registro />
            </PublicRoutes>
          }
        />
        <Route
          path="compra"
          element={
            <PrivateRoutes logged={logged}>
              <Compra />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
