import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({movies}) {
  return (
    <ul className="card-list">
      {movies.map((movie) => <MoviesCard key={movie.id} movie={movie}/>)}
    </ul>
  );
}

export default MoviesCardList;
