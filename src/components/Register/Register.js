import './Register.css'
import LoginForm from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";

function Register({ onRegister }) {
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
        >
          <section className="login-form__section">
            <label className='login-form__label'>Имя</label>
            <input
              type="text"
              name="name"
              className="login-form__input"
              placeholder="Имя"
              required
              aria-label="Поле для ввода имени"
            />
          </section>
          <section className="login-form__section">
            <label className='login-form__label'>Email</label>
            <input
              type="email"
              name="email"
              className="login-form__input"
              placeholder="Email"
              required
              aria-label="Поле для ввода почты"
            />
          </section>
          <section className="login-form__section">
            <label className='login-form__label'>Пароль</label>
            <input
              type="password"
              name="password"
              className="login-form__input"
              placeholder="Пароль"
              required
              minLength="5"
              aria-label="Поле для ввода пароля"
            />
          </section>
        </LoginForm>
      </div>
    </section>
  );
}

export default Register;
