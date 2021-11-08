import './Burger.css';

function Burger({menuState}) {
  const [, setIsShowMenu] = menuState;
  return (
    <div className='mobile-menu'>
      {/*<input*/}
      {/*  checked={isShowMenu}*/}
      {/*  type="checkbox"*/}
      {/*  className="mobile-menu__checkbox"*/}
      {/*/>*/}
      <label htmlFor="checkbox" className="mobile-menu__btn" onClick={() => setIsShowMenu(state => !state)}>
        <div className="mobile-menu__icon"/>
      </label>
    </div>
  );
}

export default Burger;
