export const apiMovieBaseUrl = "https://api.nomoreparties.co/beatfilm-movies";
// export const apiBaseUrl = "http://localhost:3000";
export const apiBaseUrl = "https://api.aveor-movie.students.nomoredomains.icu";

export const apiHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const apiCredentials = "include";

export const movieCardConfig = () => {
    if (window.innerWidth > 1200) {
        return 12;
    } else if (window.innerWidth > 720) {
        return 8;
    } else {
        return 5;
    }
};

export const addMovieCardConfig = () => {
    if (window.innerWidth > 1200) {
        return 3;
    } else if (window.innerWidth > 720) {
        return 2;
    } else {
        return 1;
    }
};

export const movieDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}ч ${minutes}м`;
};

export const resizeTimeout = 500;
