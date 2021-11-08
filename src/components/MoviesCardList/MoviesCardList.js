import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({movies}) {
  return (
    <ul className="card-list">
      {movies.map((_, i) => <MoviesCard key={i} />)}
    </ul>
  );
}

export default MoviesCardList;
