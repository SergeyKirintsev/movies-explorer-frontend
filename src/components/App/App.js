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

function App() {
  const history = useHistory();

  const menuState = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({})

  useEffect(() => {
    setCurrentUser({
      name: "Sergey",
      email: "kserg80@gmail.com"
    })
  }, [])

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
            <Main/>
          </Route>

          <Route path='/movies'>
            <Movies menuState={menuState}/>
          </Route>

          <Route path='/saved-movies'>
            <SavedMovies menuState={menuState}/>
          </Route>

          <Route path='/profile'>
            <Profile menuState={menuState} />
          </Route>

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
