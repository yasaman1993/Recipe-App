import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import "../style /meals.css";

export default function CategoryPage() {
  const { category } = useParams();
  const [categoryMeals, setCategoryMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setCategoryMeals(data.meals);
        } else {
          setCategoryMeals([]);
        }
      })
      .catch((error) => console.error("Error fetching meals:", error));
  }, [category]);

  return (
    <section className="category-page">
      <Header />
      <h2 className="category-title">{category} Meals</h2>
      {categoryMeals ? (
        <section className="meals-section">
          <ul className="meals-list">
            {categoryMeals.map((meal) => (
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
