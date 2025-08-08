import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id, 10);

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      id: recipeId,
      title,
      description,
    });
    navigate(`/recipes/${recipeId}`); // Redirect to recipe details
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
