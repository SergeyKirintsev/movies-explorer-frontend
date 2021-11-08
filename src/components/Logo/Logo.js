import './Logo.css';
import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} className="logo btn-hover" alt="Логотип"/>
    </Link>
  );
}

export default Logo;
