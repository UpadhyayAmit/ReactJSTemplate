//Import React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return "Click Me"
}

// Create React Component
const App = () => {


    return (
        <div>
            <label className="lable" htmlFor="name">Name</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }} >{getButtonText()}</button>
        </div>
    );
};


// Take react component and show it on UI
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);