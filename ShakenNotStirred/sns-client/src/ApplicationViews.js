import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from "./components/Home";

export const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    )
};
