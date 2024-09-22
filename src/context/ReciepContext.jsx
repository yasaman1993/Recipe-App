import React, { createContext, useReducer } from "react";

const initialState = {
  recipes: [],
  
  categories: [],
  categoryMeals: [],
  randomRecipe: {},
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "Recipes":
      return { ...state, recipes: action.payload };
    
    case "Categories":
      return { ...state, categories: action.payload };
    case "CategoryMeal":
      return { ...state, categoryMeals: action.payload };
    case "RandomRecipe":
      return { ...state, randomRecipe: action.payload };
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
