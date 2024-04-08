import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLock, FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../Pages/Menu";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  const sesionStart = (e) => {
    e.preventDefault();

    let getUsuario = document.getElementById("usuario").value;
    let getPass = document.getElementById("pass").value;
    if (getUsuario.length === 0 && getPass.length === 0) {
      alert("No puede quedar vacio los campos");
    } else {
      document.getElementById("usuario").value = "";
      document.getElementById("pass").value = "";

      if (getUsuario == "admin" && getPass == "123") {
        setLogin("true");
        document.getElementById("formLogin").style.display = "none";
        
      }
    }
  };
  return (
    <div className="login-card">
      <IoPersonCircleOutline className="login-icon person-icon" />
      <FaLock className="login-icon lock" />
      <h1 className="login">login</h1>
      <form className="form" id="formLogin">
        <label htmlFor="" className="label-login">
          User
        </label>
        <input
          type="text"
          className="input-login"
          id="usuario"
          onChange={(e) => setUsuario(e.target.value)}
          pattern="[a-zA-Z0-9_-]{3,16}"
          required
        />
        <label htmlFor="" className="label-login">
          Password
        </label>
        <input
          type="text"
          className="input-login"
          id="pass"
          onChange={(e) => setPass(e.target.value)}
          pattern=".{6,}"
          title="La contraseña debe tener al menos 6 caracteres"
          required
        />
        <input
          type="submit"
          value="Entrar"
          className="submit-button"
          onClick={sesionStart}
        />
      </form>
      <span className="forgot">
        <NavLink to="/recovery" />
        forgot password?
      </span>
      <span>Don&apos;t have an acount</span>
      <span>
        <NavLink to="/register">Register </NavLink>
      </span>

      <div className="social-net">
        <FaFacebookF className="social" />
        <FaGoogle className="social" />
        <LuInstagram className="social" />
      </div>
      {login == 'true' && <Menu user={usuario}/>}
    </div>
  );
}
