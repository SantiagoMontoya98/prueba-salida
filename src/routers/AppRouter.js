import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compra from "../components/Compra";
import Login from "../components/Login";
import Registro from "../components/Registro";
import Home from "../containers/Home";
import { GlobalStyles } from "../styles/GlobalStyles";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="compra" element={<Compra />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
