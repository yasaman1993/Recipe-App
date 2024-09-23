import { useContext, useEffect } from "react";
import { RecipeContext } from "../context/ReciepContext";
import { Link } from "react-router-dom";
import "../style /category.css";

export default function Category() {
  const { state, dispatch } = useContext(RecipeContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "Categories", payload: data.categories });
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, [dispatch]);

  return (
    <section className={`category-container ${state.isDarkMode ? "dark-mode" : ""}`}>
      <h2 className="title">Categories</h2>
      <ul className="category-list">
        {state.categories.map((category) => (
          <li key={category.idCategory} className="category-item">
            <Link to={`/category/${category.strCategory}`}>
              <h4>{category.strCategory}</h4>
              <img src={category.strCategoryThumb} alt={category.strCategory} className="category-image" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
