import './Header.css';
import Logo from "../Logo/Logo";

function Header({children, modification}) {
  return (
    <header className={`header ${modification ? modification : ''}`}>
      <div className="header__container">
        <Logo/>
        {children}
      </div>
    </header>
  );
}

export default Header;
