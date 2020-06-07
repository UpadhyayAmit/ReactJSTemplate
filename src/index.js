//Import React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';



// Create React Component
const App = () => {
    return (
    <div>HI there</div>
    );
};


// Take react component and show it on UI
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);