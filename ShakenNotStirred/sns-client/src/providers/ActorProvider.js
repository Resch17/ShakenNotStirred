import React, { useState, useContext } from 'react';

export const ActorContext = React.createContext();

export const ActorProvider = (props) => {
    const [actors, setActors] = useState([]);

    const apiUrl = '/api/actor';

    const getAllActors = () => {
        return fetch(apiUrl)
            .then((res) => res.json())
            .then((parsed) => {
                setActors(parsed);
                return parsed;
            });
    };

    const addActor = (actor) => {
        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(actor),
        }).then(getAllActors);
    };

    return (
        <ActorContext.Provider value={{ getAllActors, addActor, actors }}>
            {props.children}
        </ActorContext.Provider>
    );
};
