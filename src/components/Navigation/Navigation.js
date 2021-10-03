import './Navigation.css';
import {NavLink} from "react-router-dom";
import Account from "../Account/Account";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__movies">
        <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_selected">Фильмы</NavLink>
        <NavLink
          to="/saved-movies"
          className="navigation__link"
          activeClassName="navigation__link_selected"
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <Account/>
    </nav>
  );
}

export default Navigation;
