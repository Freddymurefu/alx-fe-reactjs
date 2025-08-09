import React from 'react';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {/* Search Bar at the top */}
      <SearchBar />

      {/* Recipe Cards / List */}
      <div>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              {/* You can add Edit / Delete buttons here */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
