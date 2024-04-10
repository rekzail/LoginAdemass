import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLock, FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../Pages/Menu";

import { useAuth } from "../firebase/auhContext";




export default function Login() {
  const [login, setLogin] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [animate, setAnimate] = useState(false);
  
  const auth = useAuth();
 
 
 
  const handleLogin = async (e)=> {
    e.preventDefault();
    if (!usuario || !pass) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    try {
      await auth.login(usuario, pass);
      setLogin(true);
      setLoginAttempts(0);
      setError(""); 
      document.getElementById("formLogin").style.display = "none";
    } catch (error) {
      setError("Error al iniciar sesión. Verifique sus credenciales.");
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
      setLoginAttempts(loginAttempts + 1); 
      if (loginAttempts >= 2) {
        document.getElementById("forgot").style.display = "block";
      }
    }
  }

  

  return (
    <div className={`login-card ${animate ? "animate" : ""}`}>
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
          
          title="La contraseña debe tener al menos 6 caracteres"
          required
        />
        <input
          type="submit"
          value="Entrar"
          className="submit-button"
          onClick={handleLogin}
        />
      </form>
      {error && <div className="error">{error}</div>}
      <span className="forgot" id="forgot">
        <NavLink to="/recovery" >
         forgot password?
        </NavLink>
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
      {login && <Menu user={usuario}/>}
    </div>
  );
}
