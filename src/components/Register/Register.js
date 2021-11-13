import './Register.css'
import LoginForm from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";
import {useFormWithValidation} from "../../utils/form-validation";
import {validationConfig} from "../../utils/constants";

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation()

  return (
    <section className='register'>
      <div className='register__container'>
        <div className='register__header'>
          <Logo />
        </div>

        <LoginForm
          title="Добро пожаловать!"
          submitBtnText="Зарегистрироваться"
          onSubmit={onRegister}
          linkText='Войти'
          linkTo='/sign-in'
          linkInfo='Уже зарегистрированы?'
          isValid={isValid}
        >
          <section className="login-form__section">
            <label className='login-form__label'>Имя</label>
            <input
              pattern={validationConfig.nameRegEx}
              value={values.name || ''}
              onChange={handleChange}
              type="text"
              name="name"
              className="login-form__input"
              placeholder="Имя"
              required
              aria-label="Поле для ввода имени"
              autoComplete={'off'}
            />
            <span className="login-form__input-error">{errors.name && validationConfig.nameRegExInvalidMessage}</span>
          </section>
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
              minLength={validationConfig.passwordMinLength}
              maxLength={validationConfig.passwordMaxLength}
              aria-label="Поле для ввода пароля"
            />
            <span className="login-form__input-error">{errors.password}</span>
          </section>
        </LoginForm>

      </div>
    </section>
  );
}

export default Register;
