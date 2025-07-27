import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './components/recipeStore';
import { useState } from 'react';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      {editing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;