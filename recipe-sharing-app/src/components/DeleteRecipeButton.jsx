import { useRecipeStore } from './components/recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDelete) onDelete(); // Optional callback after delete
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;