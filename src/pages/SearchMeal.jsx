import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { RecipeContext } from "../context/ReciepContext";
import Header from "../components/Header";

export default function SearchMeal() {
  const { searchTerm } = useParams();
  const { state, dispatch } = useContext(RecipeContext);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        if (data.meals) {
          dispatch({ type: "SearchMeal", payload: data.meals });
        } else {
          dispatch({ type: "SearchMeal", payload: [] });
        }
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, [searchTerm, dispatch]);

  const sectionStyle = {
    height : "100vh",
    padding: "20px",
    textAlign: "center",
    backgroundColor: state.isDarkMode ? "#404244" : "#f8f9fa",
    borderRadius: "8px",
    boxShadow: state.isDarkMode
      ? "0 1px 5px rgba(255, 255, 255, 0.1)"
      : "0 1px 5px rgba(0, 0, 0, 0.1)",
    
  };
  
  const titleStyle = {
    marginBottom: "20px",
    color: state.isDarkMode ? "#f1f1f1" : "#495057",
    fontSize: "24px",
    fontWeight: "bold",
  };
  
  const listStyle = {
    listStyleType: "none",
    padding: "0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  
  const itemStyle = {
    margin: "10px",
    backgroundColor: state.isDarkMode ? "#404244" : "#f8f9fa",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: state.isDarkMode
      ? "0 1px 5px rgba(255, 255, 255, 0.1)"
      : "0 1px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    width: "200px",
  };
  
  const itemHoverStyle = {
    transform: "scale(1.05)",
  };
  
  const imageStyle = {
    width: "100%",
    height: "120px",
    objectFit: "cover",
  };
  
  const mealTitleStyle = {
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    color: state.isDarkMode ? "#f1f1f1" : "#495057",
  };



  return (
    <section style={sectionStyle}>
      <Header />
      <h2 style={titleStyle}>Search Results for: {searchTerm}</h2>
      {state.searchMeal.length > 0 ? (
        <ul style={listStyle}>
          {state.searchMeal.map((meal) => (
            <li
              key={meal.idMeal}
              style={itemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = itemHoverStyle.transform)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }>
              <Link
                to={`/recipe/${meal.idMeal}`}
                style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  style={imageStyle}
                />
                <h4 style={mealTitleStyle}>{meal.strMeal}</h4>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No meals found.</p>
      )}
    </section>
  );

  
}


