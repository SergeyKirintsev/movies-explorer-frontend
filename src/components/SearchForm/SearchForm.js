import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import img from '../../images/find-icon.svg';
import {useFormWithValidation} from "../../utils/form-validation";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function SearchForm({findFilms}) {
  const { values, handleChange, resetForm } = useFormWithValidation();
  const {pathname} = useLocation();

  useEffect(() => {
    resetForm({
      name: '',
      shortFilm: false
    })
  }, [])

  function handleSubmit(evt) {
    evt.preventDefault();
    findFilms(values, pathname);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <fieldset className="search-form__fieldset">
            <img className="search-form__img" src={img} alt="Иконка поиска"/>
            <input
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              className="search-form__input"
              placeholder="Фильм"
              autoComplete="off"
            />
            <button className="search-form__submit-btn" type="submit" />
          </fieldset>
          <fieldset className="search-form__fieldset">
            <FilterCheckbox
              values={values}
              onChange={handleChange}
            />
            <span className="search-form__span">Короткометражки</span>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
