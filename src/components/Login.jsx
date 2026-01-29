 import React, { useState, useContext } from 'react';
 import { UserContext } from '../context/UserContext';

 const Login = () => {
    const { user, setUser } = useContext(UserContext);
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')

    const handleLogin = (e) => {
        e.preventDefault(); 
        setUser({ name: name, email: email }); 
        alert(`שלום ${name}, התחברת בהצלחה!`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <form onSubmit={handleLogin} style={{ display: 'inline-block', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h2>התחברות</h2>
                
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="text" 
                        placeholder="שם משתמש" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="email" 
                        placeholder="מייל" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                    התחבר
                </button>
            </form>
            {user && <p style={{marginTop: '5px'}}>משתמש מחובר כרגע: {user.name}</p>}
        </div>
    );
};

export default Login;