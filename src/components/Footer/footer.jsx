import Logo from "../../assets/White_Logo.png";
import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="Footer_Kasa">
      <img className="Footer_logo_Kasa" src={Logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
