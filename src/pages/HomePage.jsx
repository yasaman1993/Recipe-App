import AlphabeticalMeals from "../components/AlphabeticalMeals";
import RandomMeal from "../components/RandomMeal";
import Category from "../components/Categories";
import Header from "../components/Header";
import { RecipeContext } from "../context/ReciepContext";
import { useContext } from "react";

export default function HomePage() {
const {state} = useContext(RecipeContext);

  const containerStyle = {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: state.isDarkMode ? '#343a40' : '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  };



  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  };

  const sectionStyle = {
    backgroundColor: state.isDarkMode ? '#495057' : '#fff', 
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };



  return (
    <div style={containerStyle}>
      <Header />
      <section style={contentStyle}>
        <div style={sectionStyle}>
          <AlphabeticalMeals />
        </div>
        <div style={sectionStyle}>
          <RandomMeal />
        </div>
        <div style={sectionStyle}>
          <Category />
        </div>
      </section>
    </div>
  );
}
