import React from "react";

const Sorting = ({ sortType, setSortType, sortOrder, setSortOrder }) => {
  return (
    <div className="sorting-options">
      <label>Sort by:</label>
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="name">Name (A-Z)</option>
        <option value="date">Upload Date (Newest)</option>
        <option value="rating">Rating (Highest)</option>
      </select>
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")} className="sort-btn">
        {sortOrder === "asc" ? "⬆ Ascending" : "⬇ Descending"}
      </button>
    </div>
  );
};

export default Sorting;
