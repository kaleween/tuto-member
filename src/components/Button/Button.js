import React from 'react';
import './Button.css';

const Button = ({vieillir}) => {
    return(
        <button onClick={vieillir}>
            Getting older
        </button>
    )
}

export default Button;