import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredRecipes.map(recipe => (
            <li key={recipe.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;