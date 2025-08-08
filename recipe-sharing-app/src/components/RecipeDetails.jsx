import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);
  const clearSelectedRecipe = useRecipeStore((state) => state.clearSelectedRecipe);

  if (!selectedRecipe) return null;

  return (
    <div style={{ border: '2px solid black', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{selectedRecipe.title}</h2>
      <p>{selectedRecipe.description}</p>
      <p><strong>ID:</strong> {selectedRecipe.id}</p>
      <button onClick={clearSelectedRecipe}>Close</button>
      
      {/* Delete button added below */}
      <DeleteRecipeButton recipeId={selectedRecipe.id} />
    </div>
  );
};

export default RecipeDetails;
