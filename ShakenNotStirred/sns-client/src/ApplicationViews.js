import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/Home';
import { CharacterList } from './components/CharacterList';
import { CharacterForm } from './components/CharacterForm';
import { ActorForm } from './components/ActorForm';
import './App.css';

export const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/characters" exact>
                <div className="forms">
                    <ActorForm />
                    <CharacterForm />
                </div>
                <CharacterList />
            </Route>
        </Switch>
    );
};
