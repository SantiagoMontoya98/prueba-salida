import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { LoginContainer } from "../styles/LoginStyles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginEmailPassword,
  loginFacebook,
  loginGoogle,
} from "../redux/actions/actionLogin";
import { useForm } from "../hooks/useForm";

const Login = () => {
  const dispatch = useDispatch();

  const [formValue, handleInputChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const { email, pass } = formValue;

  const handleGoogle = () => dispatch(loginGoogle());

  const handleFacebook = () => dispatch(loginFacebook());

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(dispatch(loginEmailPassword(email, pass)));
  };

  //console.log(formValue);

  return (
    <LoginContainer>
      <h1>Inicar Sesión</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="correo">Correo electronico</label>
          <input
            type="text"
            id="correo"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="pass">Contraseña</label>
          <input
            type="password"
            id="pass"
            name="pass"
            onChange={handleInputChange}
          />
        </div>

        <input type="submit" value="Ingresar" />
      </form>

      <div className="google-fb">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="fb"
          onClick={handleFacebook}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google"
          className="google"
          onClick={handleGoogle}
        />
      </div>

      <Link to="/registro">
        <p>Registrarse</p>
      </Link>

      <Link to="/">
        <p>Inicio</p>
      </Link>
    </LoginContainer>
  );
};

export default Login;
