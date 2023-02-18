import Section from "../../components/Section/section";
import RentalCard from "../../components/Rental_Card/rental_Card";
import "../../styles/home.css";

function Main() {
  return (
    <div className="home_div">
      <Section />
      <div className="card_div_style">
        <RentalCard />
      </div>
    </div>
  );
}

export default Main;
