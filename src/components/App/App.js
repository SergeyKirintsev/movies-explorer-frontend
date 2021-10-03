import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import {Route, Switch} from "react-router-dom";

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
      </Switch>
    </>
  );
}

export default App;
