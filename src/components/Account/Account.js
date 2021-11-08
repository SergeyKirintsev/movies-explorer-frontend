import './Account.css';
import {NavLink} from "react-router-dom";

function Account({onClick}) {
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
    <button className="account__icon"/>
  </nav>
  );
}

export default Account;
