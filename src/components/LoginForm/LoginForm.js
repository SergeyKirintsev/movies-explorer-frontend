import {Link} from "react-router-dom";
import './LoginForm.css';

function LoginForm({title, submitBtnText, children, linkTo, linkInfo, linkText, isValid, onSubmit, formValues}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
      <form className="login-form" name="loginForm" noValidate onSubmit={handleSubmit}>
        <div className='login-form__inputs'>
          <h2 className="login-form__title">{title}</h2>
          {children}
        </div>
        <div className='login-form__info'>
          <button
            disabled={!isValid}
            type="submit"
            className={`login-form__submit btn-hover ${!isValid ? 'login-form__submit_disabled' : 'df'}`}
          >
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
