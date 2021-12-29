import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeaderContainer } from "../styles/HeaderStyles";

const Header = ({ logged }) => {
  const { name } = useSelector((state) => state.userLogin);

  //console.log(name);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then((user) => {
        console.log("logout");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <HeaderContainer>
      <p
        style={
          name === undefined || !logged
            ? { visibility: "hidden" }
            : { visibility: "default" }
        }
      >
        Bienvenido, {name?.split(" ")[0]}
      </p>

      <div className="buttons">
        <Link
          to="/login"
          style={logged ? { display: "none" } : { display: "block" }}
        >
          <button>Inicar Sesión</button>
        </Link>

        <Link
          to="/registro"
          style={logged ? { display: "none" } : { display: "block" }}
        >
          <button>Registrarse</button>
        </Link>

        <button
          style={!logged ? { display: "none" } : { display: "block" }}
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
