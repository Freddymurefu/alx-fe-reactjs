import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';       
import RecipeDetails from './components/RecipeDetails'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage or recipe list */}
        <Route path="/" element={<RecipeList />} />

        {/* Recipe details page */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
