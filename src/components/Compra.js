import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Compra = () => {
  const navegar = useNavigate();

  useEffect(() => {
    Swal.fire({
      icon: "success",
      title: "Compra realizada con éxito!",
      showConfirmButton: false,
      timer: 2500,
    });

    setTimeout(() => navegar("/"), 2500);
  }, []);

  return <div></div>;
};

export default Compra;
