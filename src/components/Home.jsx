import homeImage from '../assets/אוכל.jpg';
import { useContext } from 'react';
import { RecipesContext } from "../context/RecipesContext";

const Home = () => {
    const { recipes } = useContext(RecipesContext);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        padding: '20px',
        textAlign: 'center'
    };

    const cardStyle = {
        border: '1px solid #ccc',
        padding: '30px',
        borderRadius: '15px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        maxWidth: '500px'
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={{ color: '#333', marginBottom: '20px' }}>
                    ברוכים הבאים לאתר המתכונים!!!
                </h1>

                <img 
                    src={homeImage} 
                    alt="picture_home" 
                    style={{
                        width: '250px', 
                        borderRadius: '10px', 
                        marginBottom: '20px',
                        objectFit: 'cover'
                    }}
                />

                {/* <div style={{ marginTop: '10px', color: '#666' }}>
                    <p>גלו עולם של טעמים עם <strong>{recipes.length}</strong> המתכונים שלנו.</p>
                </div> */}
            </div>
        </div>
    );
};

export default Home;