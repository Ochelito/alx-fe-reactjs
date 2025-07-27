import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>My Recipe Book</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;