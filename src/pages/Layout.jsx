import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/ReciepContext";
export default function Layout() {
  const { state } = useContext(RecipeContext);

  return (
    <div className={state.isDarkMode ? "dark-mode" : "light-mode"}>
      
      <Outlet />
    </div>
  );
}
