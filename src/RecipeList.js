import React, { useState } from "react";

const RecipeList = ({ recipes }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedRecipes = [...recipes].sort((a, b) =>
    sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  return (
    <div>
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort {sortOrder === "asc" ? "Z-A" : "A-Z"}
      </button>

      <ul>
        {sortedRecipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
