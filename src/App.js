import './App.css';
import AppBar from './components/AppBar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails';
import Login from './components/Login'
import AddRecipe from './components/AddRecipe'
import FavoriteList from './components/FavoriteList'
function App() {
  return (
    <>
    <AppBar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/RecipeList'element={<RecipeList/>}/>
      <Route path='/RecipeDetails/:id'element={<RecipeDetails/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/AddRecipe'element={<AddRecipe/>}/>
      <Route path='/FavoriteList'element={<FavoriteList/>}/>
    </Routes>
    </>
  );
}

export default App;
