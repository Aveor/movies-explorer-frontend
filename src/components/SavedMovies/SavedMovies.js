import { useEffect } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
  loggedIn,
  moviesData,
  currentMovies,
  savedMovies,
  getSavedMovies,
  getMovies,
  searchStatus,
  setSearchStatus,
  searchError,
  setCurrentMovies,
  addLike,
  removeLike,
  burgerMenuOpen,
  burgerMenuClose,
}) {
  useEffect(() => {
    getSavedMovies();
  }, [getSavedMovies]);

  return (
    <>
      <Header
        loggedIn={loggedIn}
        burgerMenuOpen={burgerMenuOpen}
        burgerMenuClose={burgerMenuClose}
      />
      <SearchForm
        moviesData={moviesData}
        getMovies={getMovies}
        setSearchStatus={setSearchStatus}
        setCurrentMovies={setCurrentMovies}
      />
      {searchStatus === "search_searching" && <Preloader />}
      {searchStatus === "search_error" && (
        <p className="movie-error">{searchError}</p>
      )}
      {(searchStatus === "search_finished" || searchStatus === "") && (
        <MoviesCardList
          movies={
            currentMovies.length === 0 ? savedMovies : currentMovies
          }
          savedMovies={savedMovies}
          addLike={addLike}
          removeLike={removeLike}
          type="saved-movies"
        />
      )}
      <div className="saved-movies__divider"></div>
      <Footer />
    </>
  );
}

export default SavedMovies;
