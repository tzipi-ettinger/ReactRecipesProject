import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RecipesContext } from '../context/RecipesContext';

const FavoriteList = () => {
    const { recipes } = useContext(RecipesContext);

    if (!recipes) return <div>טוען מתכונים...</div>;

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',      
        justifyContent: 'center', 
        gap: '20px',          
        padding: '20px'
    };

    const favoriteRecipes = recipes.filter(r => r.favorite === true);

    return (
        <div style={containerStyle}>
            {favoriteRecipes.length === 0 ? (
                <h3>  אין מתכונים מועדפים </h3>
            ) : (
                favoriteRecipes.map((recipe) => (
                    <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px', backgroundColor: '#fff', textAlign: 'center' }}>
                        <h3>{recipe.name}</h3>
                        <h4>זמן הכנה: {recipe.time} דקות</h4>
                        <h4>קטגוריה: {recipe.category}</h4>
                        <Link to={`/RecipeDetails/${recipe.id}`} style={{ color: '#4CAF50', fontWeight: 'bold', textDecoration: 'none' }}>
                            הצגת פרטי מתכון
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
}

export default FavoriteList;