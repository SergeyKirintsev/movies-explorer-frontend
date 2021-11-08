import './Profile.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";

function Profile({menuState}) {
  return (
    <>
      <Header>
        <Burger menuState={menuState}/>
        <Navigation menuState={menuState}/>
      </Header>

        <section className="profile">

          <form className="profile__form">
            <h2 className="profile__form-title">Привет, Виталий!</h2>
            <section className="profile__form-section">
              <div className="profile__form-field">
                <label className="profile__form-label" htmlFor="name">Имя</label>
                <input className="profile__form-input" id="name" type="text" placeholder="Имя" value={'Виталий'}/>
              </div>
              <span className="profile__form-span">Сообщение об ошибке</span>
            </section>
            <section className="profile__form-section">
              <div className="profile__form-field profile__form-field_no-border">
                <label className="profile__form-label" htmlFor="email">E-mail</label>
                <input className="profile__form-input" id="email" type="email" placeholder="E-mail" value={''}/>
              </div>
              <span className="profile__form-span">Сообщение об ошибке</span>
            </section>
          </form>

          <div className='profile__buttons'>
            <button className='profile__btn profile__btn_edit'>Редактировать</button>
            <button className='profile__btn profile__btn_exit'>Выйти из аккаунта</button>
          </div>

        </section>

    </>
  );
}

export default Profile;
