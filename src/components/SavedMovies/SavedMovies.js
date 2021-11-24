import SearchForm from '../SearchForm/SearchForm';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import Preloader from "../Preloader/Preloader";
import {useEffect} from "react";

function SavedMovies({menuState, movies, createMovie, deleteMovie, savedMovies, findFilms, filterForSaved}) {

  useEffect(() => {
    filterForSaved()
  }, [])

  return (
    <>
      <Header>
        <Burger menuState={menuState}/>
        <Navigation menuState={menuState}/>
      </Header>

      <main className="content">
        <SearchForm findFilms={findFilms}/>

        { movies.length > 0
            ? <MoviesCardList
              movies={movies}
              createMovie={createMovie}
              deleteMovie={deleteMovie}
              savedMovies={savedMovies}
            />
            : <h2 className='movies__error'>Ничего не найдено!</h2>
        }
      </main>

      <Footer/>
    </>
  );
}

export default SavedMovies;
