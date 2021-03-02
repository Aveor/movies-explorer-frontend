import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ loadMore, movies, isSavedPage }) {
  return (
    <section className="movies-cardlist">
      <ul className="movies-cardlist__container">
        {movies.map((movie, key) => (
          <MoviesCard movie={movie} isSavedPage={isSavedPage} key={key} />
        ))}
      </ul>
      {loadMore && (
        <div className="movies-cardlist__load-more">
          <button className="movies-cardlist__load-more-button">Ещё</button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
