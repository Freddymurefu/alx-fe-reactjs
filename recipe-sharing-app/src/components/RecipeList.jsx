import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = (id) => favorites.some(recipe => recipe.id === id);

  return (
    <div>
      <SearchBar />

      <div>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <h3>
                <Link to={`/recipes/${recipe.id}`}>
                  {recipe.title}
                </Link>
              </h3>
              <p>{recipe.description}</p>

              {isFavorite(recipe.id) ? (
                <button onClick={() => removeFavorite(recipe.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addFavorite(recipe)}>
                  Add to Favorites
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
