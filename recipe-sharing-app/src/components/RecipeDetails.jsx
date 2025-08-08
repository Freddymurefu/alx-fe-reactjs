import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);
  const clearSelectedRecipe = useRecipeStore((state) => state.clearSelectedRecipe);

  if (!selectedRecipe) return null;

  return (
    <div style={{ border: '2px solid black', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{selectedRecipe.title}</h2>
      <p><strong>ID:</strong> {selectedRecipe.id}</p>
      <p>{selectedRecipe.description}</p>
      <button onClick={clearSelectedRecipe}>Close</button>
    </div>
  );
};

export default RecipeDetails;
