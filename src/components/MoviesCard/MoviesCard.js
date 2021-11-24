import "./MoviesCard.css";
import {MOVIES_API_URL} from "../../utils/constants";
import {durationToHours} from "../../utils/utils";
import {useLocation} from "react-router-dom";

function isSaved(savedMovies, id) {
  return savedMovies.map(el => el.movieId).includes(id)
}

function MoviesCard({movie, createMovie, savedMovies, deleteMovie}) {
  const {nameRU, duration, trailerLink, image, id} = movie;
  const {pathname} = useLocation();

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

        {pathname === '/saved-movies'
        ?
          <button
            onClick={() => deleteMovie(movie)}
            type="button"
            aria-label="Поставить отметку"
            className={`card__like-btn card__like-btn_delete`}
          />
        :
          <button
            onClick={!isSaved(savedMovies, id) ? () => createMovie(movie) : () => deleteMovie(movie)}
            type="button"
            aria-label="Поставить отметку"
            className={`card__like-btn ${!isSaved(savedMovies, id) ? 'card__like-btn_no-like' : ''}`}
          />
        }

      </div>
      <span className="card__duration">{durationToHours(duration)}</span>
    </li>
  );
}

export default MoviesCard;
