import './FilterCheckbox.css';

function FilterCheckbox({values, onChange}) {
  return (
    <label className="switcher">
      <input
        name="shortFilm"
        className="switcher__input"
        type="checkbox"
        checked={values.shortFilm}
        onChange={onChange}
      />
      <span className="switcher__span"/>
    </label>
  );
}

export default FilterCheckbox;
