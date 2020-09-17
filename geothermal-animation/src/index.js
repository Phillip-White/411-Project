import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import map from './Geothermal Schematic.jpg';
import arrow from './blue_flow_arrow-removebg-preview.png';
import './onload.js';



class Animation extends React.Component {

    render() {
        return (

            <div className="page" id = "page">

                <div className="season">
                    <a onClick = "Summer()">Summer</a>
                    <p></p>
                    <a onClick = "Winter">Winter</a>
                </div>
                <div className="wrapper">
                    <div id = "map-container">
                        <img src={map} id="map" alt="Geothermal System" />
                        <div id="arrow-container">
                            <img src={arrow} id="arrow" />
                        </div>
                    </div>



                </div>

            </div>

        );
    }
}





ReactDOM.render(
    <Animation />,
    document.getElementById('root')
);

