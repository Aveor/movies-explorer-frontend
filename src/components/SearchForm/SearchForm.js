import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <div className="search-form__box">
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            minLength="2"
            maxLength="30"
            required
          ></input>
          <button type="submit" className="search-form__button">Поиск</button>
        </div>
        <FilterCheckbox />
        <span className="search-form__line" />
      </div>
    </form>
  );
}

export default SearchForm;

