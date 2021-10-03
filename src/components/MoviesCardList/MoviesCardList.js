import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({movies}) {
  return (
    <ul className="card-list">
      {movies.map(() => <MoviesCard />)}
    </ul>
  );
}

export default MoviesCardList;
