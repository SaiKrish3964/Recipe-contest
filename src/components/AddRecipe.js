import React, { useState } from "react";

const AddRecipe = ({ addRecipe }) => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    category: "",
    avgRating: "",
    uploadedOn: new Date().toISOString().split("T")[0], // Current date
    image: ""
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL
      setSelectedImage(imageUrl);
      setRecipeData({ ...recipeData, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipeData.name && recipeData.category && recipeData.image) {
      addRecipe(recipeData);
      setRecipeData({ name: "", category: "", avgRating: "", uploadedOn: new Date().toISOString().split("T")[0], image: "" });
      setSelectedImage(null);
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <input type="text" name="name" placeholder="Recipe Name" value={recipeData.name} onChange={handleChange} required />
      
      <select name="category" value={recipeData.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Main Course">Main Course</option>
        <option value="Dessert">Dessert</option>
        <option value="Beverage">Beverage</option>
      </select>
      
      <input type="number" name="avgRating" placeholder="Rating (1-5)" value={recipeData.avgRating} onChange={handleChange} required />
      
      <input type="file" accept="image/*" onChange={handleImageChange} />
      
      {selectedImage && <img src={selectedImage} alt="Preview" className="image-preview" />}
      
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
