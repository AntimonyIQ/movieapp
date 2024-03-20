import { FaPlaystation } from 'react-icons/fa';

export default function Home() {
    return (
        <main className="login">
            <FaPlaystation 
                color='#ff0000' 
                size={60}>
            </FaPlaystation>
            <h1>Login Page</h1>
            
            <form>
                <div>
                    <label>Email address: </label>
                    <input
                        type="email"
                        required
                        placeholder="e.g admin@gmail.com">
                    </input>
                </div>
                
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        required
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
