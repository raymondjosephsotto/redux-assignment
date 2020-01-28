import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <button className="button" onClick={props.personAdded}>Add Person</button>
    </div>
);

export default addPerson;