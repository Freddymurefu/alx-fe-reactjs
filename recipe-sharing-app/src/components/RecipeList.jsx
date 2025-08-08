import { useRecipeStore } from './recipeStore';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const setSelectedRecipe = useRecipeStore((state) => state.setSelectedRecipe);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.title}</strong> - {recipe.description}
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            <button onClick={() => setSelectedRecipe(recipe)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;