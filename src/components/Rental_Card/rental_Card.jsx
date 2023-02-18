import Prop from "prop-types";
import { ownerList } from "../../datas/owner";
import { Link } from "react-router-dom";
import "../../styles/card.css";

function Card() {
  return (
    <ul className="owner_card_contain">
      {ownerList.map(({ title, id, cover }) => (
        <li className="owner_card" key={id}>
          <Link to={`/owner/${id}`}>
            <div className="owner_card_color"></div>
            <h2 className="owner_card_title">{title}</h2>
            <img className="owner_card_img" src={cover} alt={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

Card.propTypes = {
  key: Prop.string,
  title: Prop.string,
  cover: Prop.string,
};

export default Card;
