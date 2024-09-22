import { RecipeContext } from "../context/ReciepContext";
import { useContext, useEffect, useState } from "react";
import "../style /RandomMeal.css";

export default function RandomMeal() {
  const { state, dispatch } = useContext(RecipeContext);
  const [randomMeal, setRandomMeal] = useState(null);

  const fetchRandomMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "RandomRecipe", payload: data.meals[0] });
        setRandomMeal(data.meals[0]);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  };

  useEffect(() => {
    if (!randomMeal) return;
    fetchRandomMeal(); // بارگذاری اولیه
  }, []);

  const handleClick = () => {
    fetchRandomMeal();
  };

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = randomMeal ? randomMeal[`strIngredient${i}`] : null;
    const measure = randomMeal ? randomMeal[`strMeasure${i}`] : null;
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="random-meal-container">
      <button className="lucky-button" onClick={handleClick}>
        <h2>Lucky Recipe!</h2>
      </button>
      {randomMeal && (
        <div className="meal-details">
          <h3>{randomMeal.strMeal}</h3>
          <img
            src={randomMeal.strMealThumb}
            alt={randomMeal.strMeal}
            className="meal-image"
          />
          <h4>Ingredients:</h4>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <p>{randomMeal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}
