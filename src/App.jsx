import { Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./context/ReciepContext";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";


import "../src/App.css";
import RecipeDetails from "./components/RecipeDetails";

export default function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
         
        </Route>
      </Routes>
    </RecipeProvider>
  );
}
