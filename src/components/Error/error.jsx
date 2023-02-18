import "../../styles/error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="Error_Page">
      <h1 className="Error_Page_title">404</h1>
      <p className="Error_Page_subtitle">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="Error_Page_link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
