import { useState, useEffect, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { apiBaseUrl } from "../../utils/config";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Burger from '../Burger/Burger';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: null,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");
  const [searchError, setSearchError] = useState("");
  const [serverError, setServerError] = useState("");
  const [menuOpened, setMenuOpened] = useState(false);

  const cookieCheck = useCallback(async () => {
    try {
      const user = await mainApi.getUserInfo("users/me");
      setCurrentUser({
        name: user.name,
        email: user.email,
        _id: user._id,
      });
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const login = ({ email, password }) => {
    mainApi
      .login("signin", email, password)
      .then((user) => {
        if (user._id) {
          cookieCheck();
        }
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  const updateUserInfo = ({ name, email }) => {
    mainApi
      .updateUserInfo("users/me", name, email)
      .then((user) => {
        if (user) {
          setCurrentUser({
            name: user.name,
            email: user.email,
          });
          setServerError("Данные успешно изменены!");
        }
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  const register = ({ name, email, password }) => {
    mainApi
      .register("signup", name, email, password)
      .then((user) => {
        if (user._id) {
          login({ email: email, password: password });
        }
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  const logout = () => {
    mainApi
      .logout("signout")
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({
          name: "",
          email: "",
          _id: null,
        });
        localStorage.removeItem("loggedIn");
        reset();
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  const checkLocalStorage = useCallback(async () => {
    if (localStorage.getItem("movies")) {
      const localData = JSON.parse(localStorage.getItem("movies"));
      setAllMovies(localData);
    } else {
      try {
        const moviesData = await moviesApi.getMovies();
        const allMovies = moviesData.map((movie) => ({
          country: movie.country ? movie.country : "Не указано",
          director: movie.director ? movie.director : "Не указано",
          duration: movie.duration ? movie.duration : -1,
          year: movie.year ? movie.year : "Не указано",
          description: movie.description ? movie.description : "Не указано",
          image: movie.image
            ? `https://api.nomoreparties.co${movie.image.url}`
            : "",
          trailer: movie.trailerLink
            ? movie.trailerLink
            : `${apiBaseUrl}/not-found`,
          thumbnail: movie.image
            ? `https://api.nomoreparties.co${movie.image.url}`
            : "",
          movieId: movie.id ? movie.id : 0,
          nameRU: movie.nameRU ? movie.nameRU : "Не указано",
          nameEN: movie.nameEN ? movie.nameEN : "Не указано",
        }));
        setAllMovies(allMovies);
        saveToLocalStorage(allMovies);
      } catch (err) {
        setSearchError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      }
    }
  }, []);

  const getCurrentMovies = useCallback(
    async (movies, keyword, shortMovie) => {
      if (allMovies.length === 0) {
        setSearchStatus("search_error");
        return;
      }
      if (keyword.length === 0) {
        setSearchError("Нужно ввести ключевое слово");
        setSearchStatus("search_error");
        return;
      }
      const currentMovies = movies.filter(
        (el) =>
          el.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
          ((shortMovie && el.duration <= 40) ||
            (!shortMovie && el.duration > 40))
      );
      setCurrentMovies(currentMovies);
      if (currentMovies.length > 0) {
        setSearchStatus("search_finished");
      } else {
        setSearchError("Ничего не найдено");
        setSearchStatus("search_error");
      }
    },
    [allMovies]
  );

  const getSavedMovies = useCallback(async () => {
    try {
      const savedMovies = await mainApi.getSavedMovies("movies");
      setSavedMovies(savedMovies);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const saveToLocalStorage = (movies) => {
    localStorage.setItem("movies", JSON.stringify(movies));
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem("movies");
  };

  const addLike = useCallback(
    async (movie) => {
      try {
        const newMovie = await mainApi.addLike("movies", movie);
        setSavedMovies([newMovie, ...savedMovies]);
      } catch (err) {
        console.log(err);
      }
    },
    [savedMovies]
  );

  const removeLike = useCallback(
    async (movie, type) => {
      try {
        const deletedMovie = await mainApi.removeLike(
          "movies",
          movie
        );
        const updatedSavedMovies = savedMovies.filter(
          (movie) => movie.movieId !== deletedMovie.movieId
        );
        setSavedMovies(updatedSavedMovies);
        if (type === 'saved-movies') {
          const updatedCurrentMovies = currentMovies.filter(
            (movie) => movie.movieId !== deletedMovie.movieId
          );
          setCurrentMovies(updatedCurrentMovies);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [savedMovies, currentMovies]
  );

  const burgerMenuOpen = useCallback(() => {
    setMenuOpened(true);
  }, []);

  const burgerMenuClose = useCallback(() => {
    setMenuOpened(false);
  }, []);

  const reset = useCallback(() => {
    removeFromLocalStorage();
    setCurrentMovies([]);
    setSavedMovies([]);
    setSearchStatus("");
    setSearchError("");
    setServerError("");
  }, []);

  const resetErrorMessage = useCallback(() => {
    setSearchError("");
    setServerError("");
  }, []);

  useEffect(() => {
    checkLocalStorage();
    cookieCheck();
  }, [checkLocalStorage, cookieCheck]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          {menuOpened && (
            <Burger
              loggedIn={loggedIn}
              burgerMenuOpen={burgerMenuOpen}
              burgerMenuClose={burgerMenuClose}
            />
          )}
          <Switch>
            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                  <Register
                    register={register}
                    serverError={serverError}
                    resetErrorMessage={resetErrorMessage}
                  />
                )}
            </Route>
            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                  <Login
                    login={login}
                    serverError={serverError}
                    resetErrorMessage={resetErrorMessage}
                  />
                )}
            </Route>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              moviesData={allMovies}
              currentMovies={currentMovies}
              savedMovies={savedMovies}
              getMovies={getCurrentMovies}
              searchStatus={searchStatus}
              setSearchStatus={setSearchStatus}
              searchError={searchError}
              setCurrentMovies={setCurrentMovies}
              addLike={addLike}
              removeLike={removeLike}
              burgerMenuOpen={burgerMenuOpen}
              burgerMenuClose={burgerMenuClose}
            />
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              moviesData={savedMovies}
              currentMovies={currentMovies}
              savedMovies={savedMovies}
              getSavedMovies={getSavedMovies}
              getMovies={getCurrentMovies}
              searchStatus={searchStatus}
              setSearchStatus={setSearchStatus}
              searchError={searchError}
              setCurrentMovies={setCurrentMovies}
              addLike={addLike}
              removeLike={removeLike}
              burgerMenuOpen={burgerMenuOpen}
              burgerMenuClose={burgerMenuClose}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              searchStatus={"search_finished"}
              updateUserInfo={updateUserInfo}
              logout={logout}
              currentUser={currentUser}
              serverError={serverError}
              burgerMenuOpen={burgerMenuOpen}
              burgerMenuClose={burgerMenuClose}
            />
            <Route exact path="/">
              <Main
                loggedIn={loggedIn}
                burgerMenuOpen={burgerMenuOpen}
                burgerMenuClose={burgerMenuClose}
              />
            </Route>
            <Route path="*" exact={true} component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
