// import { useContext, useEffect } from "react";
// import { RecipeContext } from "../context/ReciepContext";
// import { useParams } from "react-router-dom";
// import "../style /RecipeDetails.css"; 

// export default function RecipeDetails() {
//   const { id } = useParams();
//   const { state, dispatch } = useContext(RecipeContext);

//   useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: "RecipeDetails", payload: data.meals[0] || {} });
//       })
//       .catch((error) => console.error("Error fetching recipe details:", error));
//   }, [id, dispatch]);

//   const recipe = state.recipeDetails;

//   if (!recipe) return <p>Loading...</p>; 

//   const ingredients = [];
//   for (let i = 1; i <= 20; i++) {
//     const ingredient = recipe[`strIngredient${i}`];
//     const measure = recipe[`strMeasure${i}`];
//     if (ingredient) {
//       ingredients.push(`${ingredient} - ${measure}`);
//     }
//   }

//   return (
//     <div className="recipe-details-container">
//       <h2 className="recipe-title">{recipe.strMeal}</h2>
//       <img
//         src={recipe.strMealThumb}
//         alt={recipe.strMeal}
//         className="recipe-image"
//       />
//       <div className="recipe-meta">
//         <h3>Category: {recipe.strCategory}</h3>
//         <h3>Area: {recipe.strArea}</h3>
//       </div>
//       <div className="recipe-content">
//         <h4>Ingredients:</h4>
//         <ul className="ingredients-list">
//           {ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//         </ul>
//         <h4>Instructions:</h4>
//         <p className="recipe-instructions">{recipe.strInstructions}</p>
//       </div>
//     </div>
//   );
// }






