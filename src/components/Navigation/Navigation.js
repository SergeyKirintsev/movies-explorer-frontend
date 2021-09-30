import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
        <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_selected">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_selected">Сохранённые фильмы</NavLink>
    </nav>
  );
}

export default Navigation;
