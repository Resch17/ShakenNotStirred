import React, { useContext, useState, useEffect } from 'react';
import { ActorContext } from '../providers/ActorProvider';
import { ActorMovieContext } from '../providers/ActorMovieProvider';
import { MovieContext } from '../providers/MovieProvider';
import { RoleContext } from '../providers/RoleProvider';

export const CharacterForm = () => {
    const [character, setCharacter] = useState({
        actorId: 0,
        movieId: 0,
        roleId: 0,
        characterFirst: '',
        characterLast: '',
    });
    const [alert, setAlert] = useState('');

    const { getAllActors, actors } = useContext(ActorContext);
    const { getAllActorMovies, addActorMovie, actorMovies } =
        useContext(ActorMovieContext);
    const { getAllMovies, movies } = useContext(MovieContext);
    const { getAllRoles, roles } = useContext(RoleContext);

    useEffect(() => {
        getAllActors()
            .then(getAllMovies)
            .then(getAllRoles)
            .then(getAllActorMovies);
    }, []);

    const handleControlledInputChange = (evt) => {
        const newChar = { ...character };
        let newValue = evt.target.value;
        if (evt.target.id.endsWith('Id')) {
            newValue = parseInt(newValue);
        }
        newChar[evt.target.id] = newValue;
        setCharacter(newChar);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (
            character.actorId > 0 &&
            character.roleId > 0 &&
            character.movieId > 0 &&
            character.characterLast.length > 0
        ) {
            addActorMovie(character)
                .then((res) => res.json())
                .then(() => {
                    showAlert('Character Added');
                    formReset();
                });
        }
    };

    const formReset = () => {
        setCharacter({
            movieId: 0,
            roleId: 0,
            actorId: 0,
            characterFirst: '',
            characterLast: '',
        });
    };

    const showAlert = (message) => {
        setAlert(message);
        setTimeout(() => setAlert(''), 2000);
    };

    return (
        <form className="character-form">
            <h1>Add a character</h1>
            <div className="alert-spot">{alert}</div>
            <div className="form-group">
                <label htmlFor="movieId">Select a Movie</label>
                <select
                    name="movieId"
                    id="movieId"
                    onChange={handleControlledInputChange}
                    value={character.movieId}
                >
                    <option id="0" value="0">
                        Select a Movie
                    </option>
                    {movies.map((m) => (
                        <option key={m.id} value={m.id} id={m.id}>
                            {m.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="actorId">Select an Actor</label>
                <select
                    name="actorId"
                    id="actorId"
                    onChange={handleControlledInputChange}
                    value={character.actorId}
                >
                    <option id="0" value="0">
                        Select an Actor
                    </option>
                    {actors
                        .sort((a, b) => a.lastName.localeCompare(b.lastName))
                        .map((a) => (
                            <option key={a.id} value={a.id} id={a.id}>
                                {`${a.firstName} ${a.lastName}`}
                            </option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="roleId">Select a Role</label>
                <select
                    name="roleId"
                    id="roleId"
                    onChange={handleControlledInputChange}
                    value={character.roleId}
                >
                    <option id="0" value="0">
                        Select a Role
                    </option>
                    {roles
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((r) => (
                            <option key={r.id} value={r.id} id={r.id}>
                                {r.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="characterFirst">
                    Character's First Name (Optional)
                </label>
                <input
                    type="text"
                    value={character.characterFirst}
                    name="characterFirst"
                    id="characterFirst"
                    autoComplete="off"
                    onChange={handleControlledInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="characterLast">Character's Last Name</label>
                <input
                    type="text"
                    value={character.characterLast}
                    name="characterLast"
                    id="characterLast"
                    autoComplete="off"
                    onChange={handleControlledInputChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};
