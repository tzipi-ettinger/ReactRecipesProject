import React, { createContext, useState } from 'react';
export const RecipesContext=createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "פסטה ברוטב שמנת",
      time: 30,
      ingredients: ["פסטה", "שמנת", "גבינה"],
      category: "חלבי",
      favorite: false
    },
    {
      id: 2,
      name: "עוף בגריל",
      time: 45,
      ingredients: ["עוף", "תבלינים"],
      category: "בשרי",
      favorite: false
    },
    {
      id: 3,
      name: "סופלה שוקולד",
      time: 20,
      ingredients: ["שמן", "שוקולד","סוכר"],
      category: "פרווה",
      favorite: false
    },
    {
      id: 4,
      name: "לזניה חלבית",
      time: 35,
      ingredients: ["שמנת", "פסטה","חלב"],
      category: "חלבי",
      favorite: false
    },
  ]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
