import "../../styles/carousel.css";
import LeftArrow from "../../assets/Left_Arrow.png";
import RightArrow from "../../assets/Right_Arrow.png";
import { useState } from "react";

function Carrousel(slides) {
  const [current, setCurrent] = useState(0);
  const length = slides.pictures.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="Carrousel">
      {length > 1 && (
        <div onClick={previous}>
          <img src={LeftArrow} alt="flèche gauche" className="Left_Arrow" />
        </div>
      )}
      {length > 1 && (
        <div onClick={next}>
          <img src={RightArrow} alt="flèche droite" className="Right_Arrow" />
        </div>
      )}
      <p className="Carrousel_p">
        {current + 1}/{slides.pictures.length}
      </p>
      {slides.pictures.map((image, index) => {
        return (
          <figure key={index}>
            {index === current && (
              <img
                src={image}
                alt="Images du logement"
                className="carousel_img"
              />
            )}
          </figure>
        );
      })}
    </div>
  );
}

export default Carrousel;
