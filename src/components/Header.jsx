import { Link } from "react-router-dom";
import "../style /Header.css";
import SearchBar from "./searchBar";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="home-icon">
        <i className="fa-solid fa-house"></i>
      </Link>
      <SearchBar />
      <h1 className="header-title">YummyPots</h1>
      <MenuBar />
    </header>
  );
}
