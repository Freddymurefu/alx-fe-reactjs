import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div style={{ border: '2px solid black', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
