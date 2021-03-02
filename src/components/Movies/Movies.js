import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Burger from "../Burger/Burger";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import filmOne from "../../images/Movies/cards/1.png";
import filmTwo from "../../images/Movies/cards/2.png";
import filmThree from "../../images/Movies/cards/3.png";
import filmFour from "../../images/Movies/cards/4.png";
import filmFive from "../../images/Movies/cards/5.png";
import filmSix from "../../images/Movies/cards/6.png";
import filmSeven from "../../images/Movies/cards/7.png";
import filmEight from "../../images/Movies/cards/8.png";
import filmNine from "../../images/Movies/cards/9.png";
import filmTen from "../../images/Movies/cards/10.png";
import filmEleven from "../../images/Movies/cards/11.png";
import filmTwelve from "../../images/Movies/cards/12.png";

export const moviesTemplate = {
  0: {
    name: "33 слова о дизайне",
    duration: "1ч 47м",
    isSaved: true,
    image: filmOne,
  },
  1: {
    name: "Киноальманах «100 лет дизайна»",
    duration: "1ч 3м",
    isSaved: false,
    image: filmTwo,
  },
  2: {
    name: "В погоне за Бенкси",
    duration: "1ч 42м",
    isSaved: false,
    image: filmThree,
  },
  3: {
    name: "Баския: Взрыв реальности",
    duration: "1ч 21м",
    isSaved: false,
    image: filmFour,
  },
  4: {
    name: "Бег это свобода",
    duration: "1ч 44м",
    isSaved: false,
    image: filmFive,
  },
  5: {
    name: "Книготорговцы",
    duration: "1ч 37м",
    isSaved: true,
    image: filmSix,
  },
  6: {
    name: "Когда я думаю о Германии ночью",
    duration: "1ч 56м",
    isSaved: false,
    image: filmSeven,
  },
  7: {
    name: "Gimme Danger: История Игги и The Stooge...",
    duration: "1ч 59м",
    isSaved: false,
    image: filmEight,
  },
  8: {
    name: "Дженис: Маленькая девочка грустит",
    duration: "1ч 42м",
    isSaved: true,
    image: filmNine,
  },
  9: {
    name: "Соберись перед прыжком",
    duration: "1ч 10м",
    isSaved: true,
    image: filmTen,
  },
  10: {
    name: "Пи Джей Харви: A dog called money",
    duration: "1ч 4м",
    isSaved: false,
    image: filmEleven,
  },
  11: {
    name: "По волнам: Искусство звука в кино",
    duration: "1ч 7м",
    isSaved: false,
    image: filmTwelve,
  },
};

function Movies() {
  const [movies, setMovie] = React.useState([]);

  function generateCards() {
    for (let i = 0; i < Object.keys(moviesTemplate).length; i++) {
      setMovie((prevArray) => [...prevArray, moviesTemplate[i]]);
    }
  }

  React.useEffect(() => {
    generateCards();
  }, []);

  return (
    <>
      <Header isLogged={true} />
      <SearchForm />
      <MoviesCardList loadMore={true} movies={movies} isSavedPage={false} />
      <Burger />
      <Footer />
    </>
  );
}

export default Movies;
