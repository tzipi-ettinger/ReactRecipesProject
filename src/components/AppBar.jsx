import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"

const AppBar = () => {
    const { user } = useContext(UserContext)

    // אובייקט עיצוב פשוט ועדין
    const navStyle = {
        display: 'flex',
        justifyContent: 'center', // מרכז את התפריט
        alignItems: 'center',
        gap: '20px', // רווחים שווים בין הקישורים
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd',
        marginBottom: '20px'
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontWeight: '500'
    };

    return (
        <nav style={navStyle}>
            <div style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                {user ? `שלום, ${user.name}` : 'אורח'}
            </div>
            
            <Link to={'/'} style={linkStyle}>דף הבית</Link>
            <Link to={'/RecipeList'} style={linkStyle}>רשימת מתכונים</Link>
            <Link to={'/AddRecipe'} style={linkStyle}>הוספת מתכון</Link>
            <Link to={'/Login'} style={linkStyle}>התחברות</Link>
            <Link to={'/FavoriteList'} style={linkStyle}>מתכונים מועדפים</Link>
        </nav>
    )
}

export default AppBar