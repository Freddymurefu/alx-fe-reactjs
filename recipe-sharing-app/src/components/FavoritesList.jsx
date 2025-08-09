// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  // Get the list of favorite recipe objects directly from the store
  const favorites = useRecipeStore((s) => s.favorites);

  // If no favorites yet, show an empty state
  if (favorites.length === 0) {
    return (
      <section>
        <h2>My Favorites</h2>
        <p>No favorites yet.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>My Favorites</h2>
      {/* Render each favorite recipe's details */}
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FavoritesList;
