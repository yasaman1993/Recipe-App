// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// export default function Favorites() {
//   const [favorites, setFavorites] = useState([]);

//   // Use useEffect to retrieve data from localStorage when the component is installed:
//   useEffect(() => {
//     const savedFavorites = localStorage.getItem("favorites");
//     if (savedFavorites) {
//       setFavorites(JSON.parse(savedFavorites));
//     }
//   }, []);

//   // Saving the list of favorites in local storage every time the list changes:
//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   // add item to favoriste list:
//   function addToFavorites(item) {
//     if (!favorites.includes(item)) {
//       setFavorites([ ...favorites, item ]);
//     }
//   }

//   //remove from favorite list:
//   function removeFromFavorites(item) {
//     setFavorites(favorites.filter((favorite) => favorite !== item));
//   }

//   // Checking the existence of the item in the favorites list :
//   function isFavorite(item) {
//     return favorites.some((favorite) => favorite.idMeal === item.idMeal);
//   }

//   return (
//     <div>
//       <h2>Your Favorite Recipes</h2>
//       <ul>
//         {favorites.map((recipe) => (
//           <li key={recipe.idMeal}>
//             <Link to={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>

           
//             {isFavorite(recipe) ? (
//               <button onClick={() => removeFromFavorites(recipe)}>
//                 <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
//               </button>
//             ) : (
//               <button onClick={() => addToFavorites(recipe)}>
//                 <i className="fa-regular fa-heart" style={{ color: "gray" }}></i>
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }