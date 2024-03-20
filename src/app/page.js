'use client'
import React, { useState } from 'react';
import { FaPlaystation } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    
    function getStarted(e) { 
        e.preventDefault();
        
        try {
            setLoading(true);
            
            localStorage.setItem('email', email);
            
            window.location.href = '/signup';
        } catch (error) {
            console.log('error, user registration failed');
            console.error(error.message);
        } finally {
            setLoading(false);
            setEmail('');
        }
    }
    
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    
    return (
        <main id='movie-app'>
            <div id='background'>
            
            </div>
            <div id='top-nav'>
                <div>
                    <FaPlaystation 
                        color='#ff0000' 
                        size={60}>
                    </FaPlaystation>
                    <h1 id='brand'>Movie App</h1>
                </div>
                
                <div>
                    <a className='button' href='/login'>Login</a>
                </div>
            </div>
            
            <div id='hero'>
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            
            <div id='get-started'>
                <form onSubmit={getStarted}>
                    <input
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='example@gmail.com'>
                    </input>
                    <button 
                        type='submit'
                        disabled={loading}>
                        <ClipLoader 
                            loading={loading} 
                            size={10} 
                            color='#fff' /> Get started
                    </button>
                </form>
            </div>
        </main>
    );
}