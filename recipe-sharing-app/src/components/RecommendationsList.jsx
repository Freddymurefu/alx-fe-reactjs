// src/components/RecommendationsList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  // Get the list of recommended recipes
  const recommendations = useRecipeStore((s) => s.recommendations);

  // Action to refresh/generate new recommendations
  const generateRecommendations = useRecipeStore(
    (s) => s.generateRecommendations
  );

  return (
    <section>
      <h2>Recommended for You</h2>
      {/* Button triggers a fresh recommendation list */}
      <button onClick={generateRecommendations}>Refresh Recommendations</button>

      {/* If no recommendations yet, display fallback text */}
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        // Render the current list of recommendations
        recommendations.map((r) => (
          <div key={r.id}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default RecommendationsList;
