import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import {Route, Switch} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";

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
      </Switch>
    </>
  );
}

export default App;
