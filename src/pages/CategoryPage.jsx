import { useContext, useEffect } from "react";
import { RecipeContext } from "../context/ReciepContext";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import "../style /category.css";

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
      <Header />
      <h2 className="category-title">{category} Meals</h2>
      {state.categoryMeals && state.categoryMeals.length > 0 ? (
        <section className="meals-section">
          <ul className="meals-list">
            {state.categoryMeals.map((meal) => (
              <li key={meal.idMeal} className="meal-item">
                <Link to={`/recipe/${meal.idMeal}`}>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="meal-thumb"
                  />
                  <h5>{meal.strMeal}</h5>
                </Link>
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
