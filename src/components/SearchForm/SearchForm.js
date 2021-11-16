import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import img from '../../images/find-icon.svg';
import {useFormWithValidation} from "../../utils/form-validation";

function SearchForm() {
  const { values, handleChange } = useFormWithValidation();

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <fieldset className="search-form__fieldset">
            <img className="search-form__img" src={img} alt="Иконка поиска"/>
            <input
              name="film"
              value={values.film || ''}
              onChange={handleChange}
              className="search-form__input"
              placeholder="Фильм"
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
