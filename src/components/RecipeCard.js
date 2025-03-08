import React, { Suspense } from "react";

const RecipeCard = ({ recipe, toggleFavorite, isFavorite }) => {
  return (
    <li className="recipe-item">
      {/* Lazy Loading Image */}
      <Suspense fallback={<div>Loading...</div>}>
        <img src={recipe.image} alt={recipe.name} className="recipe-image" loading="lazy" />
      </Suspense>

      {/* Recipe Details */}
      <h3>{recipe.name} ({recipe.category})</h3>
      <span>⭐ {recipe.avgRating} | 📅 {recipe.uploadedOn}</span>

      {/* Favorite Button */}
      <button 
        onClick={() => toggleFavorite(recipe.id)} 
        className={isFavorite ? "fav-btn active" : "fav-btn"}
      >
        {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
      </button>
    </li>
  );
};

export default RecipeCard;
