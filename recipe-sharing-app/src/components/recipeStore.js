import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addRecipe: (recipe) => {
    const newRecipe = { id: crypto.randomUUID(), ...recipe };
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      const updatedFavorites = state.favorites.filter((fid) => fid !== id);
      return {
        recipes: updatedRecipes,
        favorites: updatedFavorites,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        recommendations: get().generateRecommendations(updatedFavorites),
      };
    }),

  addFavorite: (recipeId) =>
    set((state) => {
      if (state.favorites.includes(recipeId)) return {};
      const updatedFavorites = [...state.favorites, recipeId];
      return {
        favorites: updatedFavorites,
        recommendations: get().generateRecommendations(updatedFavorites),
      };
    }),

  removeFavorite: (recipeId) =>
    set((state) => {
      const updatedFavorites = state.favorites.filter((id) => id !== recipeId);
      return {
        favorites: updatedFavorites,
        recommendations: get().generateRecommendations(updatedFavorites),
      };
    }),

  generateRecommendations: (favorites = get().favorites) => {
    const { recipes } = get();
    return recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) &&
        favorites.some((fid) =>
          recipe.title.toLowerCase().includes(
            recipes.find((r) => r.id === fid)?.title.split(' ')[0]?.toLowerCase()
          )
        )
    );
  },
}));
