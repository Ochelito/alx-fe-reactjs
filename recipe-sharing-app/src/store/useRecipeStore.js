import { create } from 'zustand';

// Defining the initial state and actions separately for clarity
const useRecipeStore = create((set, get) => ({
  recipes: [],

  // Adding a new recipe to the current list
  addRecipe: (newRecipe) => {
    const currentRecipes = get().recipes;
    set({ recipes: [...currentRecipes, newRecipe] });
  },

  // Replaceing the entire recipe list
  setRecipes: (recipes) => set({ recipes }),

  // Removing a recipe by ID
  removeRecipe: (id) => {
    const filtered = get().recipes.filter(recipe => recipe.id !== id);
    set({ recipes: filtered });
  },

  // Finding a recipe by ID (example of a selector-like helper)
  getRecipeById: (id) => {
    return get().recipes.find(recipe => recipe.id === id);
  },
}));

export default useRecipeStore;