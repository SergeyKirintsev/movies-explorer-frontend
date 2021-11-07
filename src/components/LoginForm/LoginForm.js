import {Link} from "react-router-dom";
import './LoginForm.css';

function LoginForm({title, submitBtnText, children, linkTo, linkInfo, linkText}) {

  return (
      <form className="login-form" name="loginForm">
        <div className='login-form__inputs'>
          <h2 className="login-form__title">{title}</h2>
          {children}
        </div>
        <div className='login-form__info'>
          <button type="submit" className="login-form__submit btn-hover">
            {submitBtnText}
          </button>
          <span className='login-form__span'>{linkInfo}</span>
          <Link to={linkTo} className="login-form__link btn-hover">
            {linkText}
          </Link>
        </div>
      </form>
  );
}

export default LoginForm;
