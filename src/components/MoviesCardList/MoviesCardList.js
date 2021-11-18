import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({movies, createMovie, savedMovies, deleteMovie}) {
  return (
    <ul className="card-list">
      {movies.map((movie) =>
        <MoviesCard
          key={movie.id}
          movie={movie}
          createMovie={createMovie}
          savedMovies={savedMovies}
          deleteMovie={deleteMovie}
        />)}
    </ul>
  );
}

export default MoviesCardList;
