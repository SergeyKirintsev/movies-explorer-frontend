import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import Preloader from "../Preloader/Preloader";

function Movies({menuState, isFetching, findFilms, movies, moveFilterToShow, filteredMovies}) {
  return (
    <>
      <Header>
        <Burger menuState={menuState}/>
        <Navigation menuState={menuState}/>
      </Header>

      <main className="content">
        <SearchForm findFilms={findFilms}/>

        {isFetching && <Preloader />}

        {movies.length > 0
          ? <MoviesCardList movies={movies}/>
          : <h2>Ничего не найдено!</h2>
        }

        {filteredMovies.length > 0 &&
          <button
            onClick={moveFilterToShow}
            className='movies__more-btn'
          >
            Ещё
          </button>
        }
      </main>

      <Footer/>
    </>
  );
}

export default Movies;
