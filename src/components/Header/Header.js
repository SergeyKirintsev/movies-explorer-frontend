import './Header.css';
import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";

function Header({children, modification}) {
  return (
    <header className={`header ${modification ? modification : ''}`}>
      <div className="header__container">
        <Link to="/">
          <img src={logo} className="header_logo" alt="Логотип" />
        </Link>
        {children}
      </div>
    </header>
  );
}

export default Header;
