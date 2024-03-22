
'use client'
import { useState } from 'react';
import { FaPlaystation } from 'react-icons/fa';

export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    
    function handleLogin(e) {
        e.preventDefault();
        
        try {
        
            if (!email && !password) {
                alert('please enter email and password');
                return;
            }
            
            const user_email = localStorage.getItem('email');
            const user_pass = localStorage.getItem('password');
            
            if (user_email == email && user_pass == password) {
                window.location.href = '/dashboard';
            } else {
                alert('invalid email and password');
            }
            
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setEmail('');
            setPassword('');
        }
    }
    
    return (
        <main className="login">
            <FaPlaystation 
                color='#ff0000' 
                size={60}>
            </FaPlaystation>
            <h1>Login Page</h1>
            
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email address: </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value.trim())
                        }}
                        placeholder="e.g admin@gmail.com">
                    </input>
                </div>
                
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******">
                    
                    </input>
                </div>
                
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    );
}
