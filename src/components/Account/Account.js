import './Account.css';
import {NavLink, useLocation} from "react-router-dom";

function Account({onClick}) {
  const {pathname} = useLocation();

  const isMainPage = pathname === '/'

  return (
    <nav className="account">
      <NavLink
        onClick={onClick}
        className="account__link"
        activeClassName="account__link_selected"
        to="/profile"
      >
        Аккаунт
      </NavLink>
      <button className={`account__icon ${isMainPage ? 'account__icon_main' : ''}`}/>
    </nav>
  );
}

export default Account;
