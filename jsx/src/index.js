// Import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

const labelName = "Enter your Name:"
const buttonText = "Click Me";
const App = function() {

    return (
        <div>
            <label className="label" htmlFor="name">{labelName}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue' , color: 'white' }} >{buttonText}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);