import './ButtonsPanel.css';
import {Link} from "react-router-dom";

function ButtonsPanel() {
  return (
    <div className="buttons-panel">
      <Link to='/sign-up' className="buttons-panel__link buttons-panel__link_signup btn-hover">Регистрация</Link>
      <Link to='sign-in' className="buttons-panel__link buttons-panel__link_signin btn-hover">Войти</Link>
    </div>
  );
}

export default ButtonsPanel;
