import React, { Fragment } from 'react';

// Exemple component stateless

const Member = ({ name, age, children }) => {
    return(
        <Fragment>
            <h2 style={{ 
                backgroundColor: age < 10 ? 'green' : 'purple', 
                color: 'white' }}>
                Member of my : { name.toUpperCase() } : { age }
            </h2>
            { children ? <p>{ children }</p> : <Fragment/> }
        </Fragment>
    )
}

export default Member;
