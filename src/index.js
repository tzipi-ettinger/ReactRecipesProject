import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter}from'react-router-dom'
import {RecipesProvider} from './context/RecipesContext'
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
  <RecipesProvider>
  <BrowserRouter>
  <App />    
  </BrowserRouter>
  </RecipesProvider>
  </UserProvider>
);
reportWebVitals();
