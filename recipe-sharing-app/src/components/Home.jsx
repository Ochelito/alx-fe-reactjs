import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


const Home = () => (
  <div className="max-w-3xl mx-auto p-4">
    <SearchBar />
    <RecipeList />
    <FavoritesList />
    <RecommendationsList />
  </div>
);

export default Home;