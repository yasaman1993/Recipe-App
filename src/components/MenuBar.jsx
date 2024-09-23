import { useContext, useState } from "react";
import { RecipeContext } from "../context/ReciepContext";

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { state, dispatch } = useContext(RecipeContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={styles.nav}>
      <button
        style={styles.menuButton}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="menu-options">
        <i className="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
      {menuOpen && (
        <button onClick={() => dispatch({ type: "Toggle-Theme" })} style={styles.themeButton}>
          {state.isDarkMode ? "Light Theme" : "Dark Theme"}
        </button>
      )}





    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    color: "#fff",
    position: "relative",
    top : "0"
  },
  menuButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },
  themeButton: {
    backgroundColor: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};