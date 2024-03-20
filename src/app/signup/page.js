// signup page
'use client'
import { useEffect, useState } from "react";
import styles from './signup.css';
import { FaPlaystation } from 'react-icons/fa';

export default function Home() {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    // () = function
    // [] = array
    // {} = object
    
    useEffect(
        () => {
            const retriveEmail = localStorage.getItem('email');
            setEmail(retriveEmail);
        }, []
    );
    
    function handleSignup() {
        try {
            setLoading(true);
            
            // code to process signup
            
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setEmail('');
            setPassword('');
            setFullname('');
        }
    }
    
    
    return (
        <main className="signup">
            <FaPlaystation 
                color='#ff0000' 
                size={60}>
            </FaPlaystation>
            <h1 className="signup-header">Signup Page</h1>
            
            <form onSubmit={handleSignup}>
                <div>
                    <label>Full name: </label>
                    <input
                        type="text"
                        placeholder="e.g John Doe"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required>
                    </input>
                </div>
                
                <div>
                    <label>Email address: </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        placeholder="*******">
                    
                    </input>
                </div>
                
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    );
}
