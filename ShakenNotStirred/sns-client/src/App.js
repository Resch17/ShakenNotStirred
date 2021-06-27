import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ApplicationViews } from './ApplicationViews';
import { MovieProvider } from './providers/MovieProvider';
import { ActorProvider } from "./providers/ActorProvider";

export const App = () => {
    return (
        <Router>
            <MovieProvider>
                <ActorProvider>
                    <Navbar />
                    <ApplicationViews />
                </ActorProvider>
            </MovieProvider>
        </Router>
    );
};
