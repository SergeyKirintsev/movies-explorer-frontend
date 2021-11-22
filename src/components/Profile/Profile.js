import './Profile.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import {useFormWithValidation} from "../../utils/form-validation";
import {validationConfig} from "../../utils/constants";
import {useCallback, useContext, useEffect, useState} from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import isEmail from "validator/es/lib/isEmail";

function Profile({menuState, onSignOut, updateProfile}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const { name, email } = useContext(CurrentUserContext);
  const [ oldValues, setOldValues] = useState({})

  const isChangeForm = useCallback(() => {
    return JSON.stringify(oldValues) !== JSON.stringify(values)
  }, [oldValues, values])

  const checkValidEmail = (evt) => {
    const email = evt.target.value;

    if (!isEmail(email)) {
      evt.target.setCustomValidity("Введите корректный e-mail");
    } else {
      evt.target.setCustomValidity("");
    }

    handleChange(evt);
  }

  useEffect(() => {
    resetForm({ name, email });
    setOldValues({ name, email });
  }, [name, email])

  return (
    <>
      <Header>
        <Burger menuState={menuState}/>
        <Navigation menuState={menuState}/>
      </Header>

        <section className="profile">

          <form className="profile__form">
            <h2 className="profile__form-title">Привет, {name}!</h2>
            <section className="profile__form-section">
              <div className="profile__form-field">
                <label className="profile__form-label" htmlFor="name">Имя</label>
                <input
                  className="profile__form-input"
                  pattern={validationConfig.nameRegEx}
                  value={values.name || ''}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Имя"
                  required
                  aria-label="Поле для ввода имени"
                  autoComplete={'off'}
                />
              </div>
              <span className="profile__form-span">{errors.name && validationConfig.nameRegExInvalidMessage}</span>
            </section>
            <section className="profile__form-section">
              <div className="profile__form-field profile__form-field_no-border">
                <label className="profile__form-label" htmlFor="email">E-mail</label>
                <input
                  className="profile__form-input"
                  value={values.email || ''}
                  onChange={(evt) => checkValidEmail(evt)}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  aria-label="Поле для ввода почты"
                />
              </div>
              <span className="profile__form-span">{errors.email}</span>
            </section>
          </form>

          <div className='profile__buttons'>
            <button
              onClick={() => updateProfile(values)}
              type='submit'
              className={`profile__btn profile__btn_edit ${!isValid || !isChangeForm() ? 'profile__btn_disabled' : ''}`}
            >
              Редактировать
            </button>
            <button
              onClick={onSignOut}
              className='profile__btn profile__btn_exit'
            >
              Выйти из аккаунта
            </button>
          </div>

        </section>

    </>
  );
}

export default Profile;
