import React, { useContext, useState } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { UserContext } from "../context/UserContext";

const AddRecipe = () => {
    const { recipes, setRecipes } = useContext(RecipesContext);
    const { user } = useContext(UserContext);

    const [name, setName] = useState('');
    const [time, setTime] = useState();
    const [category, setCategory] = useState("");
    const [favorite, setFavorite] = useState();

    const [currIng, setCurrIng] = useState(""); 
    const [allIngs, setAllIngs] = useState([]); 

    const addOne = (e) => {
        e.preventDefault(); 
        if (currIng.trim() !== "") {
            setAllIngs([...allIngs, currIng]); 
            setCurrIng(""); 
        }
    };

    const handleAddRecipe = (e) => {
        e.preventDefault();

        const newRecipe = {
            id: recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1,
            name: name,
            time: time,
            ingredients: allIngs, 
            category: category,
            favorite: favorite
        };

        setRecipes([...recipes, newRecipe]);
        alert(`המתכון ${name} נוסף בהצלחה עם ${allIngs.length} רכיבים`);

        setName('');
        setTime(0);
        setAllIngs([]);
        setCategory('');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <form onSubmit={handleAddRecipe} style={{ display: 'inline-block', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
                <h2>הוספת מתכון</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* שם מתכון */}
                    <input type="text" placeholder="שם מתכון" value={name} onChange={(e) => setName(e.target.value)} required />
                    {/* זמן הכנה */}
                    <input type="number" placeholder="זמן הכנה" value={time} onChange={(e) => setTime(e.target.value)} required />
                    {/* קטגוריה */}
                    <div style={{ marginBottom: '10px' }}>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            style={{
                                padding: '8px',
                                borderRadius: '4px',
                                width: '100%',
                                border: '1px solid #ccc',
                                backgroundColor: 'white'
                            }}
                        >
                            <option value="" disabled>בחר קטגוריה</option>
                            <option value="בשרי">בשרי</option>
                            <option value="חלבי">חלבי</option>
                            <option value="פרווה">פרווה</option>
                        </select>
                    </div>
                    {/* מועדפים */}
                    {/* <p>מתכון מועדף</p>
                    <input type="checkbox" placeholder="מועדף (true/false)" value={favorite} onChange={(e) => setFavorite(e.target.value)} /> */}
                    {/* הוספת רכיב */}
                    <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <input type="text" placeholder="רכיב (למשל: 2 ביצים)" value={currIng} onChange={(e) => setCurrIng(e.target.value)} />
                            <button type="button" onClick={addOne} style={{ cursor: 'pointer' }}>הוסף</button>
                        </div>
                        <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '14px' }}>
                            <p>הרכיבים שנוספו</p>
                            <ul style={{ paddingRight: '20px' }}>
                                {allIngs.map((it, index) => (
                                    <li key={index}>{it}</li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>

                <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '15px', width: '100%' }}>
                    שליחת המתכון
                </button>
            </form>
        </div>
    );
};

export default AddRecipe;