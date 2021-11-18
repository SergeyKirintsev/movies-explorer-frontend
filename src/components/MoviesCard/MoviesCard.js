import "./MoviesCard.css";
import {MOVIES_API_URL} from "../../utils/constants";
import {durationToHours} from "../../utils/utils";

function MoviesCard({movie}) {
  const {nameRU, duration, trailerLink, image} = movie;
  return (
    <li className="card">
      <a href={trailerLink} target="_blank">
        <img
          className="card__img"
          src={`${MOVIES_API_URL}${image.url}`}
          alt="Картинка"
        />
      </a>
      <div className="card__wrap">
        <h2 className="card_title block">{nameRU}</h2>
        <button
          type="button"
          aria-label="Поставить отметку"
          className="card__like-btn"
        />
      </div>
      <span className="card__duration">{durationToHours(duration)}</span>
    </li>
  );
}

export default MoviesCard;
