import React, { useState, useContext } from 'react';

export const ActorMovieContext = React.createContext();

export const ActorMovieProvider = (props) => {
    const [actorMovies, setActorMovies] = useState([]);

    const apiUrl = '/api/actormovie';

    const getAllActorMovies = () => {
        return fetch(apiUrl)
            .then((res) => res.json())
            .then((parsed) => {
                setActorMovies(parsed);
                return parsed;
            });
    };

    const getActorMoviesByActor = (actorId) => {
        return fetch(`${apiUrl}/actor/${actorId}`).then((res) => res.json());
    };

    const getActorMoviesByMovie = (movieId) => {
        return fetch(`${apiUrl}/movie/${movieId}`).then((res) => res.json());
    };

    const addActorMovie = (actorMovie) => {
        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(actorMovie),
        }).then((res) => {
            getAllActorMovies();
            return res;
        });
    };

    return (
        <ActorMovieContext.Provider
            value={{
                getAllActorMovies,
                addActorMovie,
                getActorMoviesByActor,
                getActorMoviesByMovie,
                actorMovies,
            }}
        >
            {props.children}
        </ActorMovieContext.Provider>
    );
};
