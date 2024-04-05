'use client'
import { useEffect, useState } from "react";


export default function Home() {
    const host_url = 'https://image.tmdb.org/t/p/w500';
    const [fullname, setFullname] = useState('');
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const user_fullname = localStorage.getItem('fullname');
        setFullname(user_fullname);
        
        async function fetchMovies() {
            try {
                const movie_fetched = await getLatestMovies();
                setMovie(movie_fetched);
            } catch (error) {
                setMovie([]);
            }
        }
        
        fetchMovies();
    }, []);
    
    async function getLatestMovies() {
        let headersList = {
            "Accept": "*/*",
        }
        
        let response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d708d98cdd52c8ec683fa8e82cb9faa6", { 
            method: "GET",
            headers: headersList
        });
        
        let data = await response.json();
        console.log(data.results);
        return data.results;
    }
    
    return (
        <main>
            <h1>Welcome back, {fullname}</h1>
            <div>
                {movie.map((movies, key) => (
                    <div key={key}>
                        <img src={host_url + movies.poster_path} alt="" width={300} />
                        <h1>{movies.title}</h1>
                        <div>{movies.overview}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}