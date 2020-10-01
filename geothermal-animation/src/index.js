import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import map from './Geothermal Schematic.jpg';
import winter from './geo-explained-winter.jpg';
import summer from './geo-explained-summer.jpg';
import './myfunction.js';

console.log(map);
console.log(winter);
console.log(summer);
class Animation extends React.Component {

    render() {
        return (

            <div className="page">

                <div className="season">
                    <a href="">Summer</a>
                    <p></p>
                    <a href="">Winter</a>
                    <html>
                        <body>
                    <button type="button"
                        onclick="document.getElementById('myImage').src={summer}">
                        <img src={winter} alt="winter" /> 
                                

                        Click me to display image </button>
                        </body>
                    </html>
                    <input type="button" value="Click to Display" onClick=" myFunction()" />
                    <img id="myImage" src={winter} alt="image" style={{ visibility: 'hidden '}} />
                </div>
                <div className="wrapper">

                    <img src={map} id="map" alt="Geothermal System" />

                </div>
                <div className="flex-container">
                    <div className="gallery">
                        <img src={winter} alt="winter" />
                            Heat is absorbed from the ground and dissipated into the building.
                   </div>
                    <div className="gallery">
                        <img src={summer} alt="summer" />
                           Heat is absorbed from the building and dissipated into the ground
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

