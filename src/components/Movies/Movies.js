import SearchForm from '../SearchForm/SearchForm';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";

function Movies() {
  return (
    <>
      <Header>
        <Navigation/>
        <Account/>
      </Header>

      <main className="content">
        <SearchForm />
        <MoviesCardList />
      </main>

      <Footer/>
    </>
  );
}

export default Movies;
