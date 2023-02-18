import "../../styles/carousel.css";
import "../../styles/owner.css";
import { ownerList } from "../../datas/owner";
import { Navigate, useParams } from "react-router-dom";
import List from "../../components/List/list";
import Carrousel from "../../components/Carrousel/carrousel";
import EmptyStar from "../../assets/White_Star.png";
import FullStar from "../../assets/Orange_Star.png";

function Owner() {
  const { id } = useParams();
  const indexOwners = ownerList.find((owner) => owner.id === id);
  if (!indexOwners) {
    return <Navigate replace to="/*" />;
  }
  const range = [1, 2, 3, 4, 5];

  return (
    <main className="content">
      <section>
        <Carrousel pictures={indexOwners.pictures} />
      </section>
      <section>
        <div className="Owner">
          <div className="Owner_contain">
            <h1 className="Owner_title">{indexOwners.title}</h1>
            <h2 className="Owner_location">{indexOwners.location}</h2>
            <ul className="Owner_location_tags">
              {indexOwners.tags.map((tags, index) => (
                <li className="Owner_tag" key={`${index}-${tags}`}>
                  {tags}
                </li>
              ))}
            </ul>
          </div>
          <div className="owner_contain">
            <div className="owner_general">
              <ul className="owner_list">
                <li className="owner_name">{indexOwners.host.name}</li>
                <li>
                  <img
                    src={indexOwners.host.picture}
                    alt="Owner illustration"
                    className="owner_img"
                  />
                </li>
              </ul>
            </div>
            <div className="owner_rating">
              {range.map((rangeElement) =>
                indexOwners.rating >= rangeElement ? (
                  <span key={rangeElement.toString()}>
                    {" "}
                    <img src={FullStar} alt="" className="owner_rating_stars" />
                  </span>
                ) : (
                  <span key={rangeElement.toString()}>
                    <img
                      src={EmptyStar}
                      alt=""
                      className="owner_rating_stars"
                    />
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="List_owner">
          <List
            className="Owner_description"
            title="Description"
            content={indexOwners.description}
          />
          <List
            className="Owner_equipement"
            title="Équipements"
            content={indexOwners.equipments.map((equipment, index) => {
              return (
                <li className="Equipement" key={index + id}>
                  {equipment}
                </li>
              );
            })}
          />
        </div>
      </section>
    </main>
  );
}

export default Owner;
