import React, { useContext, useState, useEffect } from 'react';
import { ActorMovieContext } from '../providers/ActorMovieProvider';

export const Home = () => {
    const { getAllActorMovies } = useContext(ActorMovieContext);
    const [actorMovies, setActorMovies] = useState([]);

    useEffect(() => {
        getAllActorMovies().then(setActorMovies);
    }, []);

    return (
        <>
            <h1>Welcome!</h1>
        </>
    );
};
