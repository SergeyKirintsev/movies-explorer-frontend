import {MAIN_API_URL} from "./constants";

class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  signUp({ email, password }) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email }),
    }).then(this._checkResponse);
  }

  signIn({ email, password }) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email }),
    }).then(this._checkResponse);
  }

  signOut() {
    return fetch(`${this.baseUrl}/users/signout`, {
      credentials: 'include',
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi(MAIN_API_URL);

export default mainApi;
