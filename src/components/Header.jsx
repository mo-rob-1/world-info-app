import { BsMoonFill, BsMoon } from "react-icons/bs";

function Header({ themeToggle, theme }) {
  return (
    <header>
      <div className="header__container">
        <h4 className="header__title">Where in the world?</h4>

        <div className="header__theme-toggle-wrapper">
          <button className="header__btn" type="button" onClick={themeToggle}>
            {theme === "light" ? <BsMoon className="moon-icon" /> : <BsMoonFill className="moon-icon" />}
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
