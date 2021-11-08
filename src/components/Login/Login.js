import './Login.css'
import LoginForm from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";

function Login({ onLogin }) {
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
        >
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

export default Login;
