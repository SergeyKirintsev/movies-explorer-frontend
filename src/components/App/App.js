import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import {Route, Switch} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import {useState} from "react";

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
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
