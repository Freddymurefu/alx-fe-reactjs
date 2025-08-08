import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // --- Selected recipe state ---
  selectedRecipe: null,

  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),

  clearSelectedRecipe: () => set({ selectedRecipe: null }),

  // --- CRUD functions ---
  addRecipe: (recipe) => {
    const newRecipe = {
      id: crypto.randomUUID(), // generate unique ID
      ...recipe,
    };
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
  },

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  setRecipes: (recipes) => set({ recipes }),
}));
