import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import map from './Geothermal Schematic.jpg';
import myImage from './blue_flow_arrow.jpg';

function myFunction(){
    document.getElementById('myImage').style.visibility = "visible";
}

console.log(map);

class Animation extends React.Component {

    render() {
        return (

            <div className="page">

                <div className="season">
                    <a href="">Summer</a>
                    <p></p>
                    <a href="">Winter</a>
                    <input type="button" value="click me" onClick = {myFunction}/>
                    <img id="myImage" src= {myImage} style={{visibility:'hidden'}}/>
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

