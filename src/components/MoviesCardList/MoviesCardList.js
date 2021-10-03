import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <ul className="card-list">
      {new Array(10).fill(1).map(() => <MoviesCard />)}
    </ul>
  );
}

export default MoviesCardList;