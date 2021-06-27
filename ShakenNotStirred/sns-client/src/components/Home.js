import React, { useContext, useState, useEffect } from 'react';
import { ActorMovieContext } from '../providers/ActorMovieProvider';
import { ActorForm } from './ActorForm';

export const Home = () => {
    const { getAllActorMovies } = useContext(ActorMovieContext);
    const [actorMovies, setActorMovies] = useState([]);

    useEffect(() => {
        getAllActorMovies().then(setActorMovies);
    }, []);

    return (
        <>
            <h1>Welcome!</h1>
            <h2>Add an actor</h2>
            <ActorForm />
            {console.log(actorMovies)}
        </>
    );
};
