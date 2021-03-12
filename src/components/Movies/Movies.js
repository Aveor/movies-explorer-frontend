import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
  loggedIn,
  moviesData,
  currentMovies,
  savedMovies,
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

  return (
    <>
      <Header
        loggedIn={loggedIn}
        burgerMenuOpen={burgerMenuOpen}
        burgerMenuClose={burgerMenuClose}
        type="movies"
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
      {searchStatus === "search_finished" && (
        <MoviesCardList
          movies={currentMovies}
          savedMovies={savedMovies}
          addLike={addLike}
          removeLike={removeLike}
          type="all-movies"
        />
      )}
      <Footer />
    </>
  );
}

export default Movies;
