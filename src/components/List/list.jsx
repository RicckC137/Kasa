import "../../styles/list.css";
import { useState } from "react";
import ListImg from "../../assets/ListImg.png";

function List({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="List">
      <button className="List_btn" onClick={() => setIsOpen(false)}>
        {title}
        <img className="List_img_Open" src={ListImg} alt="Flèche Bas" />
      </button>
      <p className="Decription_content">{content}</p>
    </div>
  ) : (
    <div className="List">
      <button className="List_btn" onClick={() => setIsOpen(true)}>
        {title}
        <img className="List_img" src={ListImg} alt="Flèche Haut" />
      </button>
    </div>
  );
}

export default List;
