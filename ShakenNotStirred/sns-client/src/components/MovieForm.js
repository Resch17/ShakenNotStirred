import React, { useContext, useState } from 'react';
import { MovieContext } from '../providers/MovieProvider';

export const MovieForm = () => {
    const [movie, setMovie] = useState({
        year: '',
        title: '',
        director: '',
		description: '',
		writer: ''
    });
    const { addMovie, getAllMovies } = useContext(MovieContext);

    const handleControlledInputChange = (evt) => {
        const newMovie = { ...movie };
        let newValue = evt.target.value;
        if (evt.target.id === 'year') {
            newValue = parseInt(newValue);
        }
        newMovie[evt.target.id] = newValue;
        setMovie(newMovie);
    };

    const handleSubmit = () => {
        if (
            movie.year > 1950 &&
            movie.title.length > 0 &&
            movie.director.length > 0
        ) {
            addMovie(movie).then(() => {
                window.alert('Movie added');
                resetForm();
            });
        } else {
            window.alert('Try harder to do the right thing.');
        }
    };

    const resetForm = () => {
        setMovie({ year: '', title: '', director: '', description: '', writer: '' });
    };

    return (
        <div className="movie-form">
            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input
                    id="year"
                    autoComplete="off"
                    name="year"
                    type="number"
                    min="1950"
                    max="2099"
                    step="1"
                    value={movie.year}
                    onChange={handleControlledInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    autoComplete="off"
                    name="title"
                    type="text"
                    value={movie.title}
                    onChange={handleControlledInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="director">Director</label>
                <input
                    id="director"
                    autoComplete="off"
                    name="director"
                    type="text"
                    value={movie.director}
                    onChange={handleControlledInputChange}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};
