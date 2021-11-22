import './Login.css'
import LoginForm from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";
import {useFormWithValidation} from "../../utils/form-validation";
import {validationConfig} from "../../utils/constants";
import isEmail from "validator/es/lib/isEmail";

function Login({ onLogin, isFetching }) {
  const { values, errors, handleChange, isValid } = useFormWithValidation();

  const checkValidEmail = (evt) => {
    const email = evt.target.value;

    if (!isEmail(email)) {
      evt.target.setCustomValidity("Введите корректный e-mail");
    } else {
      evt.target.setCustomValidity("");
    }

    handleChange(evt);
  }

  return (
    <section className='login'>
      <div className='login__container'>
        <div className='login__header'>
          <Logo />
        </div>
        <LoginForm
          title="Рады видеть!"
          submitBtnText={isFetching ? "Входим..." : "Войти"}
          onSubmit={() => onLogin(values)}
          linkText='Регистрация'
          linkTo='/sign-up'
          linkInfo='Ещё не зарегистрированы?'
          isValid={isValid}
          isFetching={isFetching}
        >
          <section className="login-form__section">
            <label className='login-form__label'>Email</label>
            <input
              value={values.email || ''}
              onChange={(evt) => checkValidEmail(evt)}
              type="email"
              name="email"
              className="login-form__input"
              placeholder="Email"
              required
              aria-label="Поле для ввода почты"
              disabled={isFetching}
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
              aria-label="Поле для ввода пароля"
              minLength={validationConfig.passwordMinLength}
              disabled={isFetching}
            />
            <span className="login-form__input-error">{errors.password}</span>
          </section>
        </LoginForm>
      </div>
    </section>
  );
}

export default Login;
