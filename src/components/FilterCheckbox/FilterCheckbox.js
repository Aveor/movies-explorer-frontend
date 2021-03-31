import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ shortMovie, handleShortMovieChange }) {
    const handleCheckboxClick = () => {
        handleShortMovieChange();
    };

    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__container">
                <input className="filter-checkbox__input" type="checkbox" onChange={handleCheckboxClick} checked={shortMovie} />
                <span className="filter-checkbox__slider" />
            </label>
            <p className="filter-checkbox__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
