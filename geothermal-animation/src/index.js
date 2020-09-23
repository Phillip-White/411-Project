import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import map from './Geothermal Schematic.jpg';
import arrow from './blue_flow_arrow.png';
import './onload.js';



class Animation extends React.Component {

    render() {
        return (

            <div className="page" id = "page">

                <div className="season">
                    <a onClick = "Summer()">Summer</a>
                    <p id = "x"></p>
                    <a onClick = "Winter">Winter</a>
                </div>
                <div className="wrapper">
                    <div id = "map-container">
                        <img src={map} id="map" alt="Geothermal System" />
                        <div className="area" id="CoolingTower" style={{left: 5360, top: 8288, width: 880, height: 1112}}></div>
                        <div id="arrow-container">
                            <img src={arrow} alt="arrow" className="arrow" id="1" style={{ left: 7968, top: 882 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="2" style={{ left: 7980, top: 1069 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="3" style={{ left: 7420, top: 1392 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="4" style={{ left: 6748, top: 1780 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="5" style={{ left: 6544, top: 2116 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="6" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="7" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="8" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="9" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="10" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="11" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="12" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="13" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="14" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="15" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="16" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="17" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="18" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="19" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="20" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="21" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="22" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="23" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="24" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="25" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="26" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="27" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="28" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="29" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="30" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="31" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="32" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="33" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="34" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="35" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="36" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="37" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="38" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="39" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="40" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="41" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="42" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="43" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="44" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="45" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="46" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="47" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="48" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="49" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="50" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="51" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="52" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="53" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="54" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="55" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="56" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="57" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="58" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="59" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="60" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="61" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="62" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="63" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="64" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="65" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="66" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="67" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="68" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="69" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="70" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="71" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="72" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="73" style={{ left: 6545, top: 3400 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="74" style={{ left: 6545, top: 3400 }} />
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

