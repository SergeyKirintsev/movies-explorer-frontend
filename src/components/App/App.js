import {useState} from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  const menuState = useState(false);

  return (
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
          <Register />
        </Route>

        <Route path="/sign-in">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
