import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeaderContainer } from "../styles/HeaderStyles";

const Header = () => {
  const { name } = useSelector((state) => state.userLogin);

  console.log(name);

  return (
    <HeaderContainer>
      <p
        style={
          name === undefined
            ? { visibility: "hidden" }
            : { visibility: "default" }
        }
      >
        Bienvenido, {name?.split(" ")[0]}
      </p>

      <div className="buttons">
        <Link to="/login">
          <button>Inicar Sesión</button>
        </Link>

        <button>Registrarse</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
