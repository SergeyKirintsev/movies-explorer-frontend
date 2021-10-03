import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import {Route, Switch} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
