import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'

class Animation extends React.Component {

    render() {
        return (
            <App />
        );
    }
}




ReactDOM.render(
    <Animation />,
    document.getElementById('root')
);

