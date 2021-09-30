import './Header.css';
import logo from '../../images/logo.svg';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="header_logo" alt="Логотип" />
        <Navigation/>
        <ButtonsPanel />
      </div>
    </header>
  );
}

export default Header;
