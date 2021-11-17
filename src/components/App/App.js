import {useEffect, useState} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import mainApi from "../../utils/MainApi";
import Modal from "../Modal/Modal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {useLocalStorage} from "../../utils/local-storage";
import {LOCAL_STORAGE_KEY, modal} from "../../utils/constants";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const history = useHistory();

  const [allMovies, setAllMovies] = useLocalStorage(LOCAL_STORAGE_KEY, []);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [toShowMovies, setToShowMovies] = useState([]);
  const [cardsInRow, setCardsInRow] = useState(1);
  const [filter, setFilter] = useState(null);

  const menuState = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then(({data}) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch(({message}) => {
        console.log('Ошибка при получении данных пользователя', message);
      })
  }, [])

  useEffect(() => {
    calcCardsInRow();
    window.addEventListener("resize", calcCardsInRow);
    return () => {
      window.removeEventListener("resize", calcCardsInRow)
    }
  }, [])

  useEffect(() => {
    if (filter === null) {
      return
    }
    const filtered = allMovies.filter(movie =>
      (movie.nameRU.toLowerCase().includes(filter.name.toLowerCase()))
      && (filter.shortFilm ? isShortFilm(movie.duration) : true)
    )
    const removed = filtered.splice(0, cardsInRow);

    setFilteredMovies(filtered);
    setToShowMovies(removed);
  }, [filter])

  useEffect(() => {
    console.log('useEffect filteredMovies')
    // moveFilterToShow();
  }, [filteredMovies])

  async function moveFilterToShow() {
    const copyFilteredMovies = [...filteredMovies];
    const removed = copyFilteredMovies.splice(0, cardsInRow);
    await setToShowMovies((state) => {
      console.log(1)
      return [...state].concat(removed)
    });
    await setFilteredMovies(() => {
      console.log(2)
      return copyFilteredMovies
    });
  }

  function isShortFilm(duration) {
    return duration <= 40;
  }

  function findFilms({name, shortFilm}) {
    if (!name) {
      console.log('Нужно ввести ключевое слово');
      showModal('Нужно ввести ключевое слово', modal.type_error);
      return;
    }

    // поиск
    if (allMovies.length > 0) {
      console.log('Поиск > 0 ...');
      console.log(allMovies.length);
      setFilter({name, shortFilm});
    } else {
      console.log('Поиск с загрузкой...');

      setIsFetching(true);
      moviesApi.getMovies()
        .then(data => {
          console.log(data);
          setAllMovies(data);
        })
        .catch(err => {
          console.log('Ошибка при загрузке фильмов', err);
        })
        .finally(() => {
          setIsFetching(false);
          setFilter({name, shortFilm});
        })
    }
  }

  function calcCardsInRow() {
    let countCards;
    const width = document.documentElement.clientWidth;

    switch (true) {
      case (width > 1279):
        countCards = 4;
        break;
      case (width > 990):
        countCards = 3;
        break;
      case (width > 767):
        countCards = 2;
        break;
      default:
        countCards = 1;
    }

    setCardsInRow(countCards);
  }

  function handleUpdateProfile(formData) {
    mainApi
      .setUserInfo(formData)
      .then((data) => {
        showModal('Данные профиля обновлены', modal.type_ok);
        setCurrentUser(data);
      })
      .catch(({message}) => {
        showModal(message, modal.type_error)
      })
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});

        // TODO возможно придётся убрать
        history.push('/');
      })
      .catch(({message}) => {
        showModal(message, modal.type_error)
      })
  }

  function handleRegister(formData) {
    mainApi
      .signUp(formData)
      .then(({data}) => {
        if (data) {
          setCurrentUser(data)
          setLoggedIn(true);
          history.push('/movies');
          showModal('Вы зарегистрированы!', modal.type_ok)
        }
      })
      .catch(({message}) => {
        showModal(message, modal.type_error)
      })
  }

  function handleLogin(formData) {
    mainApi
      .signIn(formData)
      .then(({data}) => {
        if (data) {
          setCurrentUser(data)
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch(({message}) => {
        showModal(message, modal.type_error)
      })
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  function showModal(message, type = 'ok') {
    setModalConfig({message, type});
    setIsOpenModal(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Switch>
          <Route path='/' exact>
            <Main
              loggedIn={loggedIn}
              menuState={menuState}
            />
          </Route>

          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            menuState={menuState}
            component={Movies}
            isFetching={isFetching}
            findFilms={findFilms}
            movies={toShowMovies}
            moveFilterToShow={moveFilterToShow}
            filteredMovies={filteredMovies}
          />

          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            menuState={menuState}
            component={SavedMovies}
          />

          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            menuState={menuState}
            onSignOut={handleSignOut}
            updateProfile={handleUpdateProfile}
            component={Profile}
          />

          <Route path='/sign-up'>
            <Register onRegister={handleRegister}/>
          </Route>

          <Route path="/sign-in">
            <Login onLogin={handleLogin}/>
          </Route>
        </Switch>

        <Modal
          onClose={closeModal}
          isOpened={isOpenModal}
          modalConfig={modalConfig}
        />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
