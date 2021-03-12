import { useState, useCallback, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { movieCardConfig, addMovieCardConfig, resizeTimeout } from "../../utils/config";

function MoviesCardList({
  movies,
  savedMovies,
  addLike,
  removeLike,
  type,
}) {

  const [counter, setCounter] = useState(movieCardConfig());
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [increment, setIncrement] = useState(addMovieCardConfig());

  const debounce = useCallback((fn, ms) => {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }, []);

  const handleMoreFilms = () => {
    setCounter(counter + increment);
  };

  useEffect(() => {
    setMoviesToShow(movies.slice(0, counter));
  }, [counter, movies]);

  useEffect(() => {
    const windowResize = debounce(function handleResize() {
      setCounter(movieCardConfig());
      setIncrement(addMovieCardConfig());
    }, resizeTimeout);
    window.addEventListener("resize", windowResize);
    return (_) => {
      window.removeEventListener("resize", windowResize);
    };
  }, [debounce]);

  return (
    <section className="movies-cardlist">
      <ul className="movies-cardlist__container">
        {(type === "all-movies" ? moviesToShow : movies).map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            savedMovies={savedMovies}
            addLike={addLike}
            removeLike={removeLike}
            type={type}
          />
        ))}
      </ul>
      {type === "all-movies" && counter < movies.length && (
        <div className="movies-cardlist__load-more">
          <button className="movies-cardlist__load-more-button" onClick={handleMoreFilms}>Ещё</button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
