import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px'
      }}
    />
  );
};

export default SearchBar;
