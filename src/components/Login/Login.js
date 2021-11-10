import './Login.css'
import LoginForm from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";
import {useFormWithValidation} from "../../utils/form-validation";

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()

  return (
    <section className='login'>
      <div className='login__container'>
        <div className='login__header'>
          <Logo />
        </div>
        <LoginForm
          title="Рады видеть!"
          submitBtnText="Войти"
          onSubmit={onLogin}
          linkText='Регистрация'
          linkTo='/sign-up'
          linkInfo='Ещё не зарегистрированы?'
          isValid={isValid}
        >
          <section className="login-form__section">
            <label className='login-form__label'>Email</label>
            <input
              value={values.email || ''}
              onChange={handleChange}
              type="email"
              name="email"
              className="login-form__input"
              placeholder="Email"
              required
              aria-label="Поле для ввода почты"
            />
            <span className="login-form__input-error">{errors.email}</span>
          </section>
          <section className="login-form__section">
            <label className='login-form__label'>Пароль</label>
            <input
              value={values.password || ''}
              onChange={handleChange}
              type="password"
              name="password"
              className="login-form__input"
              placeholder="Пароль"
              required
              minLength="5"
              aria-label="Поле для ввода пароля"
            />
            <span className="login-form__input-error">{errors.password}</span>
          </section>
        </LoginForm>
      </div>
    </section>
  );
}

export default Login;
