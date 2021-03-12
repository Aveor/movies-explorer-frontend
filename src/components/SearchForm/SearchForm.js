import { useState, useCallback, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  moviesData,
  getMovies,
  setSearchStatus,
  setCurrentMovies,
}) {
  const [keyword, setKeyword] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [shortMovie, setShortMovie] = useState(true);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleMovieSearch = useCallback(
    (e) => {
      if (e) {
        e.preventDefault();
      }
      setSearchStatus("search_searching");
      setTimeout(() => {
        getMovies(moviesData, keyword, shortMovie);
      }, 1000);
    },
    [getMovies, setSearchStatus, moviesData, keyword, shortMovie]
  );

  const handleShortMovieChange = useCallback(
    (e) => {
      setShortMovie(!shortMovie);
    },
    [shortMovie]
  );

  useEffect(() => {
    if (isSearched) {
      handleMovieSearch();
    }
  }, [shortMovie]);

  useEffect(() => {
    setIsSearched(true);
    setSearchStatus("");
    setCurrentMovies([]);
  }, [setSearchStatus, setCurrentMovies]);

  return (
    <form
      className="search-form"
      method="POST"
      name="searchMovie"
      onSubmit={handleMovieSearch}
      noValidate>
      <div className="search-form__container">
        <div className="search-form__box">
          <input className="search-form__input" id="search-form-input" placeholder="Фильм" name="filmName" onChange={handleKeywordChange} required></input>
          <span className="search-form__input-error" id="search-form__input-error"></span>
          <button type="submit" className="search-form__button">Поиск</button>
        </div>
        <FilterCheckbox
          shortMovie={shortMovie}
          handleShortMovieChange={handleShortMovieChange} />
        <span className="search-form__line" />
      </div>
    </form>
  );
}

export default SearchForm;

