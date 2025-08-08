import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />

      {/* TEMPORARY: Render RecipeDetails for testing */}
      <hr />
      <h2>Test Recipe Details</h2>
      <RecipeDetails recipeId={1} /> {/* Make sure recipe with id 1 exists */}
    </div>
  );
}

export default App;
