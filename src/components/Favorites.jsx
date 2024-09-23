import { useContext } from "react";
import { RecipeContext } from "../context/ReciepContext";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { state } = useContext(RecipeContext);

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      <ul>
        {state.favorites.map(recipe => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              {recipe.strMeal}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
