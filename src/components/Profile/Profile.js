import './Profile.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Profile() {
  return (
    <>
      <Header>
        <Navigation/>
      </Header>

      <main className="content">
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
                <input className="profile__form-input" id="email" type="email" placeholder="E-mail" value={'pochta@yandex.ru'}/>
              </div>
              <span className="profile__form-span">Сообщение об ошибке</span>
            </section>
            <button>Редактировать</button>
            <button>Выйти из аккаунта</button>
          </form>

        </section>
      </main>
    </>
  );
}

export default Profile;
