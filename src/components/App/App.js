import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/movies">
            <Movies isLoading={false} />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
