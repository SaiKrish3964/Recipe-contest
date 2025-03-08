import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeCard from "./components/RecipeCard";
import Sorting from "./components/Sorting";
import Filters from "./components/Filters";
import AddRecipe from "./components/AddRecipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sortType, setSortType] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // Dark Mode State

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [
      { id: 1, name: "Chocolate Cake", category: "Dessert", avgRating: 4.8, uploadedOn: "2024-03-10", image: "/images/chocolate-cake.jpg" },
      { id: 2, name: "Pasta Alfredo", category: "Main Course", avgRating: 4.5, uploadedOn: "2024-02-25", image: "/images/pasta-alfredo.jpg" },
      { id: 3, name: "Caesar Salad", category: "Appetizer", avgRating: 4.2, uploadedOn: "2024-03-05", image: "/images/caesar-salad.jpg" },
      { id: 4, name: "Mango Smoothie", category: "Beverage", avgRating: 4.7, uploadedOn: "2024-01-30", image: "/images/mango-smoothie.jpg" },
      { id: 5, name: "Grilled Chicken", category: "Main Course", avgRating: 4.6, uploadedOn: "2024-02-20", image: "/images/grilled-chicken.jpg" },
      { id: 6, name: "Tomato Soup", category: "Appetizer", avgRating: 4.3, uploadedOn: "2024-02-18", image: "/images/tomato-soup.jpg" },
      { id: 7, name: "Strawberry Milkshake", category: "Beverage", avgRating: 4.9, uploadedOn: "2024-02-10", image: "/images/strawberry-milkshake.jpg" }
    ];
    setRecipes(savedRecipes);

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);

    // Load Dark Mode Preference
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) setDarkMode(savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, { id: recipes.length + 1, ...newRecipe }];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const toggleFavorite = (id) => {
    let updatedFavorites = favorites.includes(id) ? favorites.filter(favId => favId !== id) : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const sortedRecipes = [...recipes]
    .filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase()) && (filter === "" || recipe.category === filter))
    .sort((a, b) => 
      sortType === "name" 
        ? (sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)) 
        : (sortType === "date" 
            ? (sortOrder === "asc" ? new Date(a.uploadedOn) - new Date(b.uploadedOn) : new Date(b.uploadedOn) - new Date(a.uploadedOn)) 
            : (sortOrder === "asc" ? a.avgRating - b.avgRating : b.avgRating - a.avgRating))
    );

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="title">🍽️ Recipe Contest Page</h1>

      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <AddRecipe addRecipe={addRecipe} />
      <Filters {...{ search, setSearch, filter, setFilter }} />
      <Sorting {...{ sortType, setSortType, sortOrder, setSortOrder }} />

      <ul className="recipe-list">
        {sortedRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} toggleFavorite={toggleFavorite} isFavorite={favorites.includes(recipe.id)} />
        ))}
      </ul>
    </div>
  );
};

export default App;
