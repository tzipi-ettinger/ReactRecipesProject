import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from "../context/RecipesContext";
// import FavoriteList from './FavoriteList'; // שים לב אם יש צורך בזה כאן

const RecipeDetails = () => {
    const { recipes, setRecipes } = useContext(RecipesContext);
    const { id } = useParams();

    // 1. תיקון: הוספת בדיקה ש-recipes קיים לפני שמריצים find כדי למנוע קריסה ראשונית
    if (!recipes) return <div>טוען...</div>;

    const recipe = recipes.find(r => r.id == id);

    if (!recipe) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>המתכון לא נמצא</div>;
    }
    
    const markavoriteRecipe = (e) => {
        e.preventDefault();

        // 2. תיקון: הפונקציה map חייבת להחזיר את המערך החדש לתוך setRecipes
        // השתמשנו ישירות ב-map שמחזיר ערך
        const updatedArray = recipes.map(r => {
            if (r.id == recipe.id) {
                // 3. תיקון: הוספת return לתוך האובייקט המעודכן
                return { ...r, favorite: !r.favorite };
            }
            // 4. תיקון: חייבים להחזיר את שאר המתכונים כמו שהם
            return r;
        });

        setRecipes(updatedArray);
        alert(recipe.favorite ? "הוסר מהמועדפים" : "נוסף למועדפים");
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        marginTop: '30px'
    };

    const cardStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        width: '300px',
        backgroundColor: '#fff',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={{ marginBottom: '10px' }}>{recipe.name}</h2>
                
                <div style={{ borderBottom: '1px solid #eee', marginBottom: '15px' }}></div>
                
                <h4 style={{ margin: '5px 0' }}>זמן הכנה: {recipe.time} דקות</h4>
                <h4 style={{ margin: '5px 0' }}>קטגוריה: {recipe.category}</h4>
                
                <div style={{ marginTop: '15px', textAlign: 'right' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', textAlign: 'center' }}>רכיבים:</strong>
                    <ul style={{ listStyleType: 'none', padding: 0, fontSize: '0.95em' }}>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} style={{ marginBottom: '5px' }}>• {ingredient}</li>
                        ))}
                    </ul>
                </div>

                <button onClick={markavoriteRecipe} style={{ 
                    marginTop: '20px', 
                    // 5. תיקון ויזואלי: צבע כפתור משתנה לפי המצב
                    backgroundColor: recipe.favorite ? '#ff4d4d' : '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    padding: '8px 15px', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    width: '100%'
                }}>
                    {recipe.favorite ? 'הסר מהמועדפים' : 'הוסף למועדפים'}
                </button>
            </div>
        </div>
    );
}

export default RecipeDetails;