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

  const [savedMovies, setSavedMovies] = useState([]);
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
  const [isFetchingError, setIsFetchingError] = useState(false);
  const [once, setOnce] = useState(true);

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
    mainApi
      .getSavedMovies()
      .then(({data}) => setSavedMovies(data))
      .catch(err => console.log(err))
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
    setOnce(false);
  }, [filter])

  function createMovie(movie) {
    mainApi
      .createMovie(movie, currentUser._id)
      .then(data => {
        setSavedMovies(state => [...state, data])
      })
      .catch(() => showModal('Ошибка при сохранении фильма', modal.type_error))
  }

  function deleteMovie({id}) {
    const [{ _id }] = savedMovies.filter(el => el.movieId === id)
    mainApi
      .deleteMovie(_id)
      .then(({message}) => {
        setSavedMovies(state => state.filter(el => el._id !== _id))
      })
      .catch(err => {
        console.log(err)
      })
  }

  async function moveFilterToShow() {
    const copyFilteredMovies = [...filteredMovies];
    const removed = copyFilteredMovies.splice(0, cardsInRow);
    await setToShowMovies((state) => {
      return [...state].concat(removed)
    });
    await setFilteredMovies(() => {
      return copyFilteredMovies
    });
  }

  function isShortFilm(duration) {
    return duration <= 40;
  }

  function findFilms({name, shortFilm}) {
    name = name.trim();
    if (!name) {
      showModal('Нужно ввести ключевое слово', modal.type_error);
      return;
    }

    // поиск
    if (allMovies.length > 0) {
      setFilter({name, shortFilm});
    } else {
      setIsFetching(true);
      setIsFetchingError(false);
      moviesApi.getMovies()
        .then(data => {
          setAllMovies(data);
        })
        .catch(err => {
          console.log(err);
          setIsFetchingError(true);
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

  async function showModal(message, type = 'ok') {
    await setModalConfig({message, type});
    await setIsOpenModal(true);
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
            isFetchingError={isFetchingError}
            once={once}
            createMovie={createMovie}
            deleteMovie={deleteMovie}
            savedMovies={savedMovies}
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
