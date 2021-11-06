import './Navigation.css';
import {NavLink} from "react-router-dom";
import Account from "../Account/Account";

function Navigation({menuState}) {
  const [isShowMenu, setIsShowMenu] = menuState;

  return (
    <nav
      className={`navigation ${isShowMenu ? 'navigation_show' : ''}`}
    >
      <button
        onClick={() => setIsShowMenu(state => !state)}
        className='navigation__close-btn'
      />
      <div className="navigation__movies">
        <NavLink
          onClick={() => setIsShowMenu(state => !state)}
          to="/"
          exact
          className="navigation__link navigation__link_mobile"
          activeClassName="navigation__link_selected"
        >
          Главная
        </NavLink>
        <NavLink
          onClick={() => setIsShowMenu(state => !state)}
          to="/movies"
          className="navigation__link"
          activeClassName="navigation__link_selected"
        >
          Фильмы
        </NavLink>
        <NavLink
          onClick={() => setIsShowMenu(state => !state)}
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
