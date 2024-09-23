import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  recipes: [],
  recipeDetails: {},
  categories: [],
  categoryMeals: [],
  randomRecipe: {},
  searchMeal: "",
  favorites : [],
  isDarkMode: false,
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "Recipes":
      return { ...state, recipes: action.payload };
    case "RecipeDetails":
      return { ...state, recipeDetails: action.payload };
    case "Categories":
      return { ...state, categories: action.payload };
    case "CategoryMeal":
      return { ...state, categoryMeals: action.payload };
    case "RandomRecipe":
      return { ...state, randomRecipe: action.payload };
    case "SearchMeal":
      return { ...state, searchMeal: action.payload };
      case "Add-To-Favorites":
        return { ...state, favorites: [...state.favorites, action.payload] };
      case "Remove-From-Favorites":
        return { ...state, favorites: state.favorites.filter(recipe => recipe.idMeal !== action.payload) };
        case "Toggle-Theme": 
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

 

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
