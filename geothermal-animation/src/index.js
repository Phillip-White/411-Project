import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import map from './Geothermal Schematic.jpg';

console.log(map);

class Animation extends React.Component {

    render() {
        return (

            <div className="page">

                <div className="season">
                    <a href="">Summer</a>
                    <p></p>
                    <a href="">Winter</a>
                </div>
                <div className="wrapper">

                    <img src={map} id="map" alt="Geothermal System" />

                </div>

            </div>

        );
    }
}



ReactDOM.render(
    <Animation />,
    document.getElementById('root')
);

