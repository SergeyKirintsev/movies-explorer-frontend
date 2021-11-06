import SearchForm from '../SearchForm/SearchForm';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";

function SavedMovies({menuState}) {
  return (
    <>
      <Header>
        <Burger menuState={menuState}/>
        <Navigation menuState={menuState}/>
      </Header>

      <main className="content">
        <SearchForm />
        <MoviesCardList movies={new Array(4).fill(1)}/>
      </main>

      <Footer/>
    </>
  );
}

export default SavedMovies;
