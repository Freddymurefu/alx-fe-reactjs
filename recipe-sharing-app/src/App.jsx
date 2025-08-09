import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage with main layout */}
        <Route
          path="/"
          element={
            <>
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />

        {/* Recipe details page */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />

        {/* Add recipe page */}
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
