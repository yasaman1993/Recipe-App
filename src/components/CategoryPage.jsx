import { useContext, useEffect } from "react";
import { RecipeContext } from "../context/ReciepContext";
import { useParams } from "react-router-dom";
import "../style /category.css"

export default function CategoryPage() {
  const { state, dispatch } = useContext(RecipeContext);
  const { category } = useParams();

  useEffect(() => {
    fetchCategoryByMeal(category);
  }, [category]);

  const fetchCategoryByMeal = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          dispatch({ type: "CategoryMeal", payload: data.meals });
        } else {
          dispatch({ type: "CategoryMeal", payload: [] });
        }
      })
      .catch((error) => console.error("Error fetching meals:", error));
  };

  return (
    <section className="category-page">
      <h2 className="category-title">{category} Meals</h2>
      {state.categoryMeals && state.categoryMeals.length > 0 ? (
        <section className="meals-section">
          <ul className="meals-list">
            {state.categoryMeals.map((meal) => (
              <li key={meal.idMeal} className="meal-item">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-thumb" />
                <h4>{meal.strMeal}</h4>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p>No meals found for this category.</p>
      )}
    </section>
  );
}
