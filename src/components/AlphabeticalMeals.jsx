import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context/ReciepContext";

export default function AlphabeticalMeals() {
  const { state, dispatch } = useContext(RecipeContext);
  const [letter, setLetter] = useState("");
  const [noData, setNoData] = useState(false); 

  useEffect(() => {
    // If no word was entered, do nothing
    if (!letter) return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot access the data");
        }
        return response.json();
      })
      .then((data) => {
        // Check if any data has been returned
        if (data.meals) {
          dispatch({ type: "Recipes", payload: data.meals });
          setNoData(false);
        } else {
          dispatch({ type: "Recipes", payload: [] });
          setNoData(true);
        }
      })
      .catch((error) => console.error("Error fetching recieps:", error));
  }, [letter]);

  return (
    <div
       style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
      }}>
      <input
        type="text"
        maxLength="1"
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
        placeholder="Enter a letter"
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          width: "50%",
          textAlign: "center",
        }}
      />

      {letter && (
        <div
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginTop: "10px",
          }}>
          {state.recipes.length > 0
            ? state.recipes.map((recipe) => (
                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  key={recipe.idMeal}
                  style={{
                    textDecoration: "none",
                    display: "block",
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#a8a8a8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ff6347)")
                  }>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "10px",
                        objectFit: "cover",
                      }}
                    />
                    <h3 style={{ margin: "0", fontSize: "16px" }}>
                      {recipe.strMeal}
                    </h3>
                  </div>
                </Link>
              ))
            : noData && <p>No recipes found for the letter "{letter}".</p>}
        </div>
      )}
    </div>
  );
}
