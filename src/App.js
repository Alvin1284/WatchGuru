import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


import "./App.css";
import searchIcon from "./search.svg";
// import React{ useEffect } from "react";

// 8a9580cd

const API_URL = 'https://www.omdbapi.com?apikey=8a9580cd'

// const movie1 = {
//     "Title": "The Shawshank Redemption",
//     "Year": "1994",
//     "imdbID": "tt0111161",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg"


// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('The Shawshank Redemption');
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for a movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>

                ) :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>
    );
}
export default App;