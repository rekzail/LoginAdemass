import PropTypes from "prop-types";
const sesionCLosed = () => {
  document.getElementById("menu").style.display = "none";
  document.getElementById("formLogin").style.display = "block";

};

export default function Menu({ user }) {
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
