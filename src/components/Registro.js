import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { registerAsync } from "../redux/actions/actionRegister";
import { RegistroContainer } from "../styles/RegistroStyles";

const Registro = () => {
  const dispatch = useDispatch();

  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    pass: "",
  });

  const { name, email, pass } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerAsync(name, email, pass));

    reset();

    //console.log("ejecuto");
  };

  return (
    <RegistroContainer>
      <h1>Registrarse</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="name"
            onChange={handleInputChange}
          />
        </div>

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

        <input type="submit" value="Registrarse" />
      </form>

      <Link to="/login">
        <p>Iniciar Sesión</p>
      </Link>

      <Link to="/">
        <p>Inicio</p>
      </Link>
    </RegistroContainer>
  );
};

export default Registro;
