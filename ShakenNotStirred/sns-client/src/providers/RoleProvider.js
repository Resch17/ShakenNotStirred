import React, { useState, useContext } from 'react';

export const RoleContext = React.createContext();

export const RoleProvider = (props) => {
    const [roles, setRoles] = useState([]);

    const apiUrl = '/api/role';

    const getAllRoles = () => {
        return fetch(apiUrl)
            .then((res) => res.json())
            .then((parsed) => {
                setRoles(parsed);
                return parsed;
            });
    };

    return (
        <RoleContext.Provider
            value={{
                getAllRoles, roles
            }}
        >
            {props.children}
        </RoleContext.Provider>
    );
};
