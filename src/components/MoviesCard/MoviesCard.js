import "./MoviesCard.css";

function MoviesCard({movie}) {
  const {nameRU, duration, trailerLink} = movie;
  return (
    <li className="card">
      <img
        className="card__img"
        src="https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1466&q=80"
        alt="Картинка"
      />
      <div className="card__wrap">
        <h2 className="card_title block">{nameRU}</h2>
        <button
          type="button"
          aria-label="Поставить отметку"
          className="card__like-btn"
        />
      </div>
      <span className="card__duration">{duration}</span>
    </li>
  );
}

export default MoviesCard;
