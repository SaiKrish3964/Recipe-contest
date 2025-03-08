import React from "react";

const Filters = ({ search, setSearch, filter, setFilter, mealFilter, setMealFilter, dishFilter, setDishFilter, attributes, setAttributes }) => {
  return (
    <div className="filter-options">
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
        <option value="">All Categories</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Main Course">Main Course</option>
        <option value="Dessert">Dessert</option>
        <option value="Beverage">Beverage</option>
      </select>

      <h3>Filter by Meal Type:</h3>
      <select value={mealFilter} onChange={(e) => setMealFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>

      <h3>Filter by Dish Type:</h3>
      <select value={dishFilter} onChange={(e) => setDishFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Curry">Curry</option>
        <option value="Pizza">Pizza</option>
        <option value="Seafood">Seafood</option>
        <option value="Soup">Soup</option>
        <option value="Mexican">Mexican</option>
        <option value="Smoothie">Smoothie</option>
      </select>

      <button onClick={() => {
        setMealFilter("");
        setDishFilter("");
        setAttributes({ testKitchenApproved: false, contestWinner: false, featured: false });
      }}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
