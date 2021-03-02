import React from "react";

import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesTemplate } from "../Movies/Movies";

function SavedMovies() {
  const [movies, setMovie] = React.useState([]);

  function generateCards() {
    for (let i = 0; i < Object.keys(moviesTemplate).length; i++) {
      if (moviesTemplate[i].isSaved) {
        setMovie((prevArray) => [...prevArray, moviesTemplate[i]]);
      }
    }
  }

  React.useEffect(() => {
    generateCards();
  }, []);

  return (
    <>
      <Header isLogged={true} />
      <SearchForm />
      <MoviesCardList loadMore={false} movies={movies} isSavedPage={true} />
      <Burger />
      <div className="saved-movies__devider"></div>
      <Footer />
    </>
  );
}

export default SavedMovies;
