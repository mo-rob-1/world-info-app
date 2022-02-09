import { BsMoonFill, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header({ themeToggle, theme }) {
  return (
    <header>
      <div className="header__container">
        <Link to="/" className="header__title">
          Where in the world?
        </Link>

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
