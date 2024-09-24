import { Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./context/ReciepContext";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetails from "./pages/RecipeDetails";
import SearchMeal from "./pages/SearchMeal";
import "../src/App.css";

export default function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/recipe/:idMeal" element={<RecipeDetails />} />
          <Route path="/search/:searchTerm" element={<SearchMeal />} />
        </Route>
      </Routes>
    </RecipeProvider>
  );
}
