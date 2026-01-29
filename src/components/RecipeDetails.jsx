import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from "../context/RecipesContext";

const RecipeDetails = () => {
    const { recipes } = useContext(RecipesContext);
    const { id } = useParams();
    
    const recipe = recipes.find(r => r.id == id);

    if (!recipe) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>המתכון לא נמצא</div>;
    }

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
                            <li key={index} style={{ marginBottom: '5px' }}>•{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <button style={{ 
                    marginTop: '20px', 
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    padding: '8px 15px', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    width: '100%'
                }}>
                    הוסף לרשימת המועדפים
                </button>
            </div>
        </div>
    );
}

export default RecipeDetails;