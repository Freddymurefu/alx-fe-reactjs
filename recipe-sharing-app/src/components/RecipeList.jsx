import React from 'react';
import { Link } from 'react-router-dom'; 
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <SearchBar />

      <div>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              { }
              <h3>
                <Link to={`/recipes/${recipe.id}`}>
                  {recipe.title}
                </Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
