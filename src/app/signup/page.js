// signup page

export default function Home() {
    
    
    return (
        <main>
            <h1>Signup Page</h1>
            
            <form>
                <div>
                    <label>Full name: </label>
                    <input
                        type="text"
                        placeholder="e.g John Doe"
                        required>
                    </input>
                </div>
                
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

