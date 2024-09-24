import React, { createContext, useReducer } from "react";

const initialState = {
  recipes: [],
  recipeDetails: {},
  isDarkMode: false,
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "Recipes":
      return { ...state, recipes: action.payload };
    case "RecipeDetails":
      return { ...state, recipeDetails: action.payload };
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
