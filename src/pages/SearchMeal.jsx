import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

export default function SearchMeal() {
  const { searchTerm } = useParams();
  const [searchMeal, setSearchMeal] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setSearchMeal(data.meals);
        } else {
          setSearchMeal("");
        }
      })
      .catch((error) => console.error("Error fetching meals:", error));
  }, [searchTerm]);

  const sectionStyle = {
    height: "100vh",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
  };

  const titleStyle = {
    marginBottom: "20px",
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
    borderRadius: "8px",
    overflow: "hidden",

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
  };

  return (
    <section style={sectionStyle}>
      <Header />
      <h2 style={titleStyle}>Search Results for: {searchTerm}</h2>
      {searchMeal.length > 0 ? (
        <ul style={listStyle}>
          {searchMeal.map((meal) => (
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
