import React from "react";
import "./MoviesCard.css";
import bookmarkActive from "../../images/MovieCard/like-active.svg";
import bookmarkInactive from "../../images/MovieCard/like-inactive.svg";
import bookmarkDelete from "../../images/MovieCard/bookmark-delete.svg";

function MoviesCard({ movie, isSavedPage }) {
  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <img src={movie.image} className="movies-card__image" alt="Постер" />
        <div className="movies-card__description">
          <div className="movies-card__info">
            <h3 className="movies-card__name">{movie.name}</h3>
            <p className="movies-card__duration">{movie.duration}</p>
          </div>
          {isSavedPage ? (
            <img
              src={bookmarkDelete}
              id="movies-card__bookmark-delete"
              alt="Убрать из закладок"
            />
          ) : (
              <img
                src={movie.isSaved ? bookmarkActive : bookmarkInactive}
                className="movies-card__bookmark"
                alt="Закладка"
              />
            )}
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
