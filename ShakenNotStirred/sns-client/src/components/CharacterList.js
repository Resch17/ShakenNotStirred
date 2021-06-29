import React, { useState, useEffect, useContext } from 'react';
import { ActorMovieContext } from '../providers/ActorMovieProvider';
import { MovieContext } from '../providers/MovieProvider';
import '../styles/CharacterList.css';

export const CharacterList = () => {
    const [localActorMovies, setLocalActorMovies] = useState([]);
    const { getAllActorMovies, actorMovies } = useContext(ActorMovieContext);
    const { getAllMovies, movies } = useContext(MovieContext);
    const [filter, setFilter] = useState('None');
    const [selectedMovie, setSelectedMovie] = useState(0);

    useEffect(() => {
        getAllMovies().then(() => {
            getAllActorMovies().then(setLocalActorMovies);
        });
    }, []);

    useEffect(() => {
        if (filter === 'None') {
            actorMovies.sort((a, b) => a.movie.id < b.movie.id);
            setLocalActorMovies(actorMovies);
        } else if (filter === 'Movie') {
            let filtered = actorMovies.filter(
                (am) => am.movieId === selectedMovie
            );
            setLocalActorMovies(filtered);
        }
    }, [filter, selectedMovie, actorMovies]);

    const movieFilter = (evt) => {
        if (parseInt(evt.target.value) > 0) {
            setFilter('Movie');
            setSelectedMovie(parseInt(evt.target.value));
        } else {
            setFilter('None');
            setSelectedMovie(0);
        }
    };

    return (
        <main className="character-list">
            <div className="character-list__filters">
                <div className="form-group">
                    <label htmlFor="filter-movie">By Movie</label>
                    <select
                        name="filter-movie"
                        id="filter-movie"
                        onChange={movieFilter}
                    >
                        <option value="0">Select a Movie</option>
                        {movies.map((m) => (
                            <option value={m.id}>{m.title}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="character-list__header">
                <div className="character-list__heading">Year</div>
                <div className="character-list__heading">Movie</div>
                <div className="character-list__heading">Character Name</div>
                <div className="character-list__heading">Role</div>
                <div className="character-list__heading">Actor</div>
            </div>
            <div className="character-list__list">
                {localActorMovies.length > 0 &&
                    localActorMovies
                        .sort((a, b) =>
                            filter === 'None'
                                ? a.movie.year - b.movie.year
                                : a.characterLast.localeCompare(b.characterLast)
                        )
                        .map((am) => {
                            return (
                                <div
                                    className="character-list__row"
                                    key={am.id}
                                >
                                    <div className="character-list__prop">
                                        {am.movie.year}
                                    </div>
                                    <div className="character-list__prop">
                                        {am.movie.title}
                                    </div>
                                    <div className="character-list__prop">
                                        {`${
                                            am.characterFirst
                                                ? am.characterFirst
                                                : ''
                                        } ${am.characterLast}`}
                                    </div>
                                    <div className="character-list__prop">
                                        {am.role.name === 'James Bond'
                                            ? '007'
                                            : am.role.name}
                                    </div>
                                    <div className="character-list__prop">
                                        {`${am.actor.firstName} ${am.actor.lastName}`}
                                    </div>
                                </div>
                            );
                        })}
            </div>
        </main>
    );
};
