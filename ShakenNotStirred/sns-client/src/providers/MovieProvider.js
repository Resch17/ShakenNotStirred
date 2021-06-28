import React, { useState, useContext } from 'react';

export const MovieContext = React.createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([]);

    const apiUrl = '/api/movie';

    const getAllMovies = () => {
        return fetch(apiUrl)
            .then((res) => res.json())
            .then((parsed) => {
                setMovies(parsed);
                return parsed;
            });
    };

    const addMovie = (movie) => {
        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        });
    };

    return (
        <MovieContext.Provider value={{ getAllMovies, addMovie, movies }}>
            {props.children}
        </MovieContext.Provider>
    );
};
