import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo_Maquette.png";
import "../../styles/header.css";

function Header() {
  const underline = { textDecoration: "underline" };

  return (
    <header className="Header_Kasa">
      <img className="Header_Kasa_logo" src={Logo} alt="Logo Kasa" />
      <nav className="Header_Kasa_nav">
        <ul>
          <li className="Header_Kasa_link">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? underline : undefined)}
            >
              Accueil
            </NavLink>
          </li>
          <li className="Header_Kasa_link">
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? underline : undefined)}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
