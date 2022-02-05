import { FaRegMoon } from "react-icons/fa";

function Header({ themeToggle }) {
  return (
    <header>
      <div className="header__container">
        <h4 className="header__title">Where in the world?</h4>

        <div className="header__theme-toggle-wrapper">
          <button className="header__btn" type="button" onClick={themeToggle}>
            <FaRegMoon className="moon-icon" /> Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
