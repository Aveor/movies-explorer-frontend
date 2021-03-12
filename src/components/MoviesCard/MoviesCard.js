import "./MoviesCard.css";
import bookmarkActive from "../../images/MovieCard/like-active.svg";
import bookmarkInactive from "../../images/MovieCard/like-inactive.svg";
import bookmarkDelete from "../../images/MovieCard/bookmark-delete.svg";
import { movieDuration } from "../../utils/config";

function MoviesCard({
  movie,
  savedMovies,
  addLike,
  removeLike,
  type,
}) {
  const handleAddLike = () => {
    addLike(movie, type);
  };

  const handleRemoveLike = () => {
    removeLike(movie, type);
  };

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <a href={movie.trailer} className="movies-card__movie-trailer-link" target="_blank" rel="noreferrer">
          <img src={movie.image} className="movies-card__movie-image" alt="Постер"></img>
        </a>
        <div className="movies-card__description">
          <div className="movies-card__info">
            <h3 className="movies-card__name">{movie.nameRU}</h3>
            <p className="movies-card__duration">{movieDuration(movie.duration)}</p>
          </div>
          {type === "saved-movies" ? (
            <img src={bookmarkDelete} id="movies-card__bookmark-delete" alt="Убрать из закладок" onClick={handleRemoveLike} />
          ) : savedMovies.some(
            (savedMovie) => savedMovie.movieId === movie.movieId
          ) ? (
                <img src={bookmarkActive} className="movies-card__bookmark" alt="Закладка" onClick={handleRemoveLike} />
              ) : (
                <img src={bookmarkInactive} className="movies-card__bookmark" alt="Закладка" onClick={handleAddLike} />
              )}
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
