import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="switcher">
      <input className="switcher__input" type="checkbox" />
      <span className="switcher__span"/>
    </label>
  );
}

export default FilterCheckbox;
