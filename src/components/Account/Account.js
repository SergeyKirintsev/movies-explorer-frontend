import './Account.css';
import {NavLink} from "react-router-dom";

function Account() {
  return (
  <nav className="account">
    <NavLink
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
