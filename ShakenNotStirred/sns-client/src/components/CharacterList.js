import React, { useState, useEffect, useContext } from 'react';
import { ActorMovieContext } from '../providers/ActorMovieProvider';
import '../styles/CharacterList.css';

export const CharacterList = () => {
    const [actorMovies, setActorMovies] = useState([]);
    const { getAllActorMovies } = useContext(ActorMovieContext);

    useEffect(() => {
        getAllActorMovies().then(setActorMovies);
    }, []);

    return (
        <main className="character-list">
            <div className="character-list__header">
                <div className="character-list__heading">Year</div>
                <div className="character-list__heading">Movie</div>
                <div className="character-list__heading">Name</div>
                <div className="character-list__heading">Role</div>
                <div className="character-list__heading">Actor</div>
            </div>
            <div className="character-list__list">
                {actorMovies.length > 0 &&
                    actorMovies.map((am) => {
                        return (
                            <div className="character-list__row" key={am.id}>
                                <div className="character-list__prop">
                                    {am.movie.year}
                                </div>
                                <div className="character-list__prop">
                                    {am.movie.title}
                                </div>
                                <div className="character-list__prop">
                                    {`${am.characterFirst ? am.characterFirst : '' } ${am.characterLast}`}
                                </div>
                                <div className="character-list__prop">
                                    {am.role.name === 'James Bond' ? '007' : am.role.name}
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
