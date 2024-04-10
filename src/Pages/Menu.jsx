import PropTypes from "prop-types";
import { useAuth } from "../firebase/auhContext";




export default function Menu({ user }) {
const auth = useAuth()
const sesionCLosed = () => {
  document.getElementById("menu").style.display = "none";
  document.getElementById("formLogin").style.display = "block";
  auth.logout();
};


  return (
    <div id="menu">
      <h1 >Hola {user} Ademmas</h1>
      <button className="submit-button" onClick={sesionCLosed}>Close Sesion</button>
    </div>
  );
}

Menu.propTypes = {
  user: PropTypes.string,
};
