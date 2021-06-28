import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from "./components/Home";
import { CharacterList } from './components/CharacterList';

export const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/characters" exact>
                <CharacterList  />
            </Route>
        </Switch>
    )
};
