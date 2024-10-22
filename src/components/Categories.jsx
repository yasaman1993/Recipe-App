import {  useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "../style /category.css";
import { RecipeContext } from "../context/ReciepContext";

export default function Category() {
const {state} = useContext(RecipeContext)
 const [categories , setCategories] = useState([])

  // useEffect(() => {
  //   console.log("test")
  //   fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCategories(data.categories)
  //       window.tns({
  //         container: ".category-list",
  //         items: 5,
  //         slideBy: 1,
  //         autoplay:true,
  //         autoplayTimeout: 2000,
  //         nav: false, // die punkte
  //         controls: false, // die buttons
  //         autoplayButtonOutput: false,
  //       });
  //     })
  //     .catch((error) => console.error("Error fetching categories:", error));
  // }, []);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      window.tns({
        container: ".category-list",
        items: 5,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false, // Dots
        controls: false, // Buttons
        autoplayButtonOutput: false,
      });
    }
  }, [categories]);

 

  return (
    <section
      className={`category-container ${
        state.isDarkMode ? "dark-mode" : ""
      }`}>
      <h2 className="title">Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.idCategory} className="category-item">
            <Link to={`/category/${category.strCategory}`}>
              <h4>{category.strCategory}</h4>
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="category-image"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
