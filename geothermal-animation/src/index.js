import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import map from './Geothermal Schematic.jpg';
import myImage from './blue_flow_arrow.jpg';

function myFunction(){
    document.getElementById('myImage').style.visibility = "visible";
}

console.log(map);
=======
import './index.css'
import App from './App'
>>>>>>> 548cafd7182ba824f1bb8928ba26974637f3d026

class Animation extends React.Component {

    render() {
        return (
<<<<<<< HEAD

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

=======
            <App />
>>>>>>> 548cafd7182ba824f1bb8928ba26974637f3d026
        );
    }
}




ReactDOM.render(
    <Animation />,
    document.getElementById('root')
);

