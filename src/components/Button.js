import React from 'react';

import './Button.scss';

const Button = (props) => {
    const btnClickHandler= (e) => {
        e.preventDefault();
        console.log(e.target.innerText + " button was clicked");
    }
    return (
        <div>
            <button color={props.color} onClick={btnClickHandler}>{props.text}</button>
        </div>
    )
}

export default Button;