import "../../styles/section.css";
import { useLocation } from "react-router-dom";
import ImageHome from "../../assets/Section_Home.png";
import ImageAbout from "../../assets/Section_About.png";

function Section() {
  const { pathname } = useLocation();

  return (
    <div className="Section">
      <div className="Section_background"></div>
      <img
        src={pathname === "/about" ? ImageAbout : ImageHome}
        alt="paysage"
        className="Section_img"
      />
      {pathname === "/" && (
        <div className="Section_title">Chez vous, partout et ailleurs</div>
      )}
    </div>
  );
}

export default Section;
