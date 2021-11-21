import {useHistory} from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound() {
  const history = useHistory();

  return (
    <div className="not-found">
      <div></div>
      <h3 className="not-found__title">
        <span className="not-found__span">404</span>
        Страница не найдена
      </h3>
      <button
        onClick={history.goBack}
        className="not-found__btn btn-hover"
      >
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
