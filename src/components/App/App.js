import {useEffect, useState} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from "../../utils/MainApi";
import Modal from "../Modal/Modal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();

  const menuState = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({})

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

  function handleUpdateProfile(formData) {
    mainApi
      .setUserInfo(formData)
      .then((data) => {
        showModal('Данные профиля обновлены');
        setCurrentUser(data);
      })
      .catch(({message}) => {
        showModal(message, 'error')
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
        showModal(message, 'error')
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
          showModal('Вы зарегистрированы!')
        }
      })
      .catch(({message}) => {
        showModal(message, 'error')
      })
  }

  function handleLogin(formData) {
    mainApi
      .signIn(formData)
      .then(({ data }) => {
        if (data) {
          setCurrentUser(data)
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch(({message}) => {
        showModal(message, 'error')
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
          />
          {/*<Route path='/movies'>*/}
          {/*  <Movies menuState={menuState}/>*/}
          {/*</Route>*/}

          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            menuState={menuState}
            component={SavedMovies}
          />

          {/*<Route path='/saved-movies'>*/}
          {/*  <SavedMovies menuState={menuState}/>*/}
          {/*</Route>*/}

          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            menuState={menuState}
            onSignOut={handleSignOut}
            updateProfile={handleUpdateProfile}
            component={Profile}
          />

          {/*<Route path='/profile'>*/}
          {/*  <Profile*/}
          {/*    menuState={menuState}*/}
          {/*    onSignOut={handleSignOut}*/}
          {/*    updateProfile={handleUpdateProfile}*/}
          {/*  />*/}
          {/*</Route>*/}

          <Route path='/sign-up'>
            <Register onRegister={handleRegister} />
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
