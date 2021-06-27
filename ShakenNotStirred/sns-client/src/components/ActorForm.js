import React, { useContext, useState } from 'react';
import { ActorContext } from '../providers/ActorProvider';

export const ActorForm = () => {
    const [actor, setActor] = useState({
        firstName: '',
        lastName: '',
    });
    const [alert, setAlert] = useState('');
    const { addActor, getAllActors } = useContext(ActorContext);

    const handleControlledInputChange = (evt) => {
        const newActor = { ...actor };
        let newValue = evt.target.value;
        newActor[evt.target.id] = newValue;
        setActor(newActor);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (actor.firstName.length > 0 && actor.lastName.length > 0) {
            addActor(actor).then(() => {
                showAlert('Actor added');
                resetForm();
            });
        } else {
            window.alert('Try harder to do the right thing.');
        }
    };

    const showAlert = (message) => {
        setAlert(message);
        setTimeout(() => setAlert(''), 2000);
    };

    const resetForm = () => {
        setActor({ firstName: '', lastName: '' });
    };

    return (
        <form className="actor-form">
            <div className="alert-spot">{alert}</div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleControlledInputChange}
                    autoComplete="off"
                    value={actor.firstName}
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleControlledInputChange}
                    autoComplete="off"
                    value={actor.lastName}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};
