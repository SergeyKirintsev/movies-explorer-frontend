import './Account.css';
import {Link} from "react-router-dom";

function Account() {
  return (
  <nav className="account">
    <Link className="account__link" to="/profile">Аккаунт</Link>
    <button className="account__icon"/>
  </nav>
  );
}

export default Account;
