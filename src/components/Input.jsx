import { AiOutlineSearch } from "react-icons/ai";

function Input({ setSearch }) {
  return (
    <div className="input-container">
      <AiOutlineSearch className="search-icon" />
      <input type="text" placeholder="Search for a country..." onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default Input;
