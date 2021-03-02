import "./Promo.css";
import mainImg from "../../images/Promo/mainImg.svg";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className="promo__img" src={mainImg} alt="Фон промо" />
      </div>
    </div>
  );
}

export default Promo;
