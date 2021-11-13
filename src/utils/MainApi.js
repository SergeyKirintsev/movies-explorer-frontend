import {MAIN_API_URL} from "./constants";

class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async _checkResponse(res) {
    const json = await res.json()
    if (res.ok) {
      return json;
    }
    return Promise.reject(json);
  }

  signUp({ name, email, password }) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password, email }),
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
