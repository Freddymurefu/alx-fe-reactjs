import { useRecipeStore } from './recipeStore';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const editingId = useRecipeStore((state) => state.editingId);

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          {editingId === recipe.id ? (
            <EditRecipeForm recipe={recipe} />
          ) : (
            <>
              <RecipeDetails recipe={recipe} />
              <DeleteRecipeButton recipeId={recipe.id} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
