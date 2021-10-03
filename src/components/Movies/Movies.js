import SearchForm from '../SearchForm/SearchForm';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";

function Movies() {
  return (
    <>
      <Header>
        <Navigation/>
      </Header>

      <main className="content">
        <SearchForm />
        <MoviesCardList movies={new Array(10).fill(1)}/>
      </main>

      <Footer/>
    </>
  );
}

export default Movies;
