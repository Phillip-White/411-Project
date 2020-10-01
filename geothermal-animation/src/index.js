import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'

/*
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import map from './Geothermal Schematic.jpg';
import arrow from './blue_flow_arrow.png';
import arrow2 from './heat_flow_arrow.png';
import CoolingTower from './CoolingTower.jpg';
import VrfCondensor from './VRFCondensor.jpg';
import CoolingTowerControlPanel from './CoolingTowerControlPanel.jpg';
import Boiler from './Boiler.jpg';
import OutsideAirUnit from './OutsideAirUnit.jpg';

import './onload.js';
import axios from 'axios';
*/


class Animation extends React.Component {
/*
    visibility = (el) => {
        if (el == "CoolingTower") {
            document.getElementById("pop-up-image").src = CoolingTower;

        }
        else if (el == "VrfCondensor") {
            document.getElementById("pop-up-image").src = VrfCondensor;

        }
        else if (el == "CoolingTowerControlPanel") {
            document.getElementById("pop-up-image").src = CoolingTowerControlPanel;

        }
        else if (el == "Boiler") {
            document.getElementById("pop-up-image").src = Boiler;

        }
        else if (el == "OutsideAirUnit") {
            document.getElementById("pop-up-image").src = OutsideAirUnit;
        }

         document.getElementById("pop-up").style.visibility = "visible";


    };

*/

    render() {
        return (
            <App />

/*
            <div className="page" id="page">

                <div className="season">
                    <Router>
                        <h3><Link to = "/summer">Summer</Link></h3>
                        <h3><Link to = "/winter">Winter</Link></h3>
                        <h3><Link to = "/info">Info</Link></h3>
                    </Router>
                    <div id="pop-up" style={{ visibility: 'hidden' }}>
                        <img src={arrow} id="pop-up-image" />
                        <div id="words">
                            <p id="desc">
                                <span id="tab"></span>
                                    I know a bit of it, but I'm not very good at it. I'm also not very good at French. I barely know anything in French, and my pronunciation probably sucks. But I'm learning it, at least. I'm also learning Esperanto. It's this language that was made up by some guy a long time ago to be the "universal language". A lot of people speak it. I am such a language nerd. Half of this text is probably gonna be about languages. But hey, as long as it's long! Ha, get it? As LONG as it's LONG? I'm so funny, right? No, I'm not. I should probably get some sleep. Goodnight! Hello, I'm back again. I basically have only two interests nowadays: languages and furries. What? Oh, sorry, I thought you knew I was a furry. Haha, oops. Anyway, yeah, I'm a furry, but since I'm a young furry, I can't really do as much as I would like to do in the fandom. When I'm older, I would like to have a fursuit, go to furry conventions, all that stuff. But for now I can only dream of that. Sorry you had to deal with me talking about furries, but I'm honestly very desperate for this to be the longest text ever. Last night I was watching nothing but fursuit unboxings. I think I need help. This one time, me and my mom were going to go to a furry Christmas party, but we didn't end up going because of the fact that there was alcohol on the premises, and that she didn't wanna have to be a mom dragging her son through a crowd of furries. Both of those reasons were understandable. Okay, hopefully I won't have to talk about furries anymore. I don't care if you're a furry reading this right now, I just don't wanna have to torture everyone else. I will no longer say the F word throughout the rest of this entire text. Of course, by the F word, I mean the one that I just used six times, not the one that you're probably thinking of which I have not used throughout this entire text. I just realised that next year will be 2020. That's crazy! It just feels so futuristic! It's also crazy that the 2010s decade is almost over. That decade brought be a lot of memories. In fact, it brought be almost all of my memories. It'll be sad to see it go. I'm gonna work on a series of video lessons for Toki Pona. I'll expain what Toki Pona is after I come back. Bye! I'm back now, and I decided not to do it on Toki Pona, since many other people have done Toki Pona video lessons already. I decided to do it on Viesa, my English code. Now, I shall explain what Toki Pona is. Toki Pona is a minimalist constructed language that has only ~120 words! That means you can learn it very quickly. I reccomend you learn it! It's pretty fun and easy! Anyway, yeah, I might finish my video about Viesa later. But for now, I'm gonna add more to this giant wall of text, because I want it to be the longest! It would be pretty cool to have a world record for the longest text ever. Not sure how famous I'll get from it, but it'll be cool nonetheless. Nonetheless. That's an interesting word. It's a combination of three entire words. That's pretty neat. Also, remember when I said that I said the F word six times throughout this text? I actually messed up there. I actually said it ten times (including the plural form). I'm such a liar! I struggled to spell the word "liar" there. I tried spelling it "lyer", then "lier". Then I remembered that it's "liar". At least I'm better at spelling than my sister. She's younger than me, so I guess it's understandable. "Understandable" is a pretty long word. Hey, I wonder what the most common word I've used so far in this text is. I checked, and appearantly it's "I", with 59 uses! The word "I" makes up 5% of the words this text! I would've thought "the" would be the most common, but "the" is only the second most used word, with 43 uses. "It" is the third most common, followed by "a" and "to". Congrats to those five words! If you're wondering what the least common word is, well, it's actually a tie between a bunch of words that are only used once, and I don't wanna have to list them all here. Remember when I talked about waffles near the beginning of this text? Well, I just put some waffles in the toaster, and I got reminded of the very beginnings of this longest text ever. Okay, that was literally yesterday, but I don't care. You can't see me right now, but I'm typing with my nose! Okay, I was not able to type the exclamation point with just my nose. I had to use my finger. But still, I typed all of that sentence with my nose! I'm not typing with my nose right now, because it takes too long, and I wanna get this text as long as possible quickly. I'm gonna take a break for now! Bye! Hi, I'm back again. My sister is beside me, watching me write in this endless wall of text. My sister has a new thing where she just says the word "poop" nonstop. I don't really like it. She also eats her own boogers. I'm not joking.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div id = "map-container">
                        <img src={map} id="map" alt="Geothermal System" />
                        <div id="click-container">
                            <div className="area" onClick={() => this.visibility("CoolingTower")} title="Cooling Tower" name="CoolingTower" id="CoolingTower" style={{ left: 5360, top: 8288, width: 872, height: 1084 }}></div>
                            <div className="area" onClick={() => this.visibility("CoolingTowerControlPanel")} id="CoolingTowerControlPanel" style={{ left: 6356, top: 8740, width: 224, height: 364 }}></div>
                            <div className="area" onClick={() => this.visibility("OutsideAirUnit")} id="OutsideAirUnit1" style={{ left: 7308, top: 600, width: 472, height: 532 }}></div>
                            <div className="area" onClick={() => this.visibility("OutsideAirUnit")} id="OutsideAirUnit2" style={{ left: 11508, top: 572, width: 476, height: 560 }}></div>
                            <div className="area" onClick={() => this.visibility("VrfCondensor")} id="VrfCondensor1" style={{ left: 5536, top: 7244, width: 436, height: 424 }}></div>
                            <div className="area" onClick={() => this.visibility("VrfCondensor")} id="VrfCondensor2" style={{ left: 7936, top: 7544, width: 452, height: 424 }}></div>
                            <div className="area" onClick={() => this.visibility("VrfCondensor")} id="VrfCondensor3" style={{ left: 9852, top: 6684, width: 460, height: 420 }}></div>
                            <div className="area" onClick={() => this.visibility("VrfCondensor")} id="VrfCondensor4" style={{ left: 12028, top: 7040, width: 436, height: 432 }}></div>
                            <div className="area" onClick={() => this.visibility("Boiler")} id="Boiler" style={{ left: 6232, top: 6952, width: 248, height: 360 }}></div>
                        </div>
                       

                        <div id="arrow-container">
                            <img src={arrow} alt="arrow" className="arrow" name="outArrows" id="1" style={{ left: 7968, top: 882 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="2" style={{ left: 7980, top: 1069 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="3" style={{ left: 7420, top: 1392 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="4" style={{ left: 6748, top: 1780 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="5" style={{ left: 6547, top: 2250 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="6" style={{ left: 6547, top: 3150 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="7" style={{ left: 6547, top: 4050 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="8" style={{ left: 6547, top: 4950 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="9" style={{ left: 6547, top: 5850 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="10" style={{ left: 6547, top: 6750 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="11" style={{ left: 6547, top: 7850 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="12" style={{ left: 6236, top: 7912 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="13" style={{ left: 6296, top: 7624 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="14" style={{ left: 6480, top: 7516 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="15" style={{ left: 6492, top: 7656 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="16" style={{ left: 6732, top: 7532 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="17" style={{ left: 7096, top: 7420 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="18" style={{ left: 6900, top: 7208 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="19" style={{ left: 6448, top: 6948 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="20" style={{ left: 5760, top: 6788 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="21" style={{ left: 5159, top: 6440 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="22" style={{ left: 4620, top: 6132 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="23" style={{ left: 4460, top: 5901 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="24" style={{ left: 4504, top: 6171 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="25" style={{ left: 3927, top: 5731 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="26" style={{ left: 3602, top: 5439 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="27" style={{ left: 3674, top: 5692 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="28" style={{ left: 3063, top: 5230 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="29" style={{ left: 2590, top: 4845 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="30" style={{ left: 2656, top: 5087 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="31" style={{ left: 2167, top: 4818 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="32" style={{ left: 2057, top: 5159 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="33" style={{ left: 2007, top: 5720 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="34" style={{ left: 2007, top: 6670 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="35" style={{ left: 2007, top: 7570 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="36" style={{ left: 2007, top: 8470 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="37" style={{ left: 2623, top: 5346 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="38" style={{ left: 3080, top: 5742 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="39" style={{ left: 3025, top: 6061 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="40" style={{ left: 3580, top: 5896 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="41" style={{ left: 3943, top: 6204 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="42" style={{ left: 3855, top: 6594 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="43" style={{ left: 12160, top: 874 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="44" style={{ left: 12072, top: 1083 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="45" style={{ left: 11555, top: 1386 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="46" style={{ left: 10879, top: 1776 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="47" style={{ left: 10710, top: 2227 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="48" style={{ left: 10710, top: 3127 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="49" style={{ left: 10710, top: 4027 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="50" style={{ left: 10710, top: 4927 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="51" style={{ left: 10710, top: 5827 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="52" style={{ left: 10710, top: 6727 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="53" style={{ left: 10626, top: 7084 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="54" style={{ left: 10659, top: 7232 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="55" style={{ left: 10433, top: 7227 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="56" style={{ left: 9856, top: 7436 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="57" style={{ left: 9218, top: 7804 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="58" style={{ left: 8530, top: 8200 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="59" style={{ left: 7969, top: 8200 }} />
                            <img src={arrow} alt="arrow" className="arrow" id="60" style={{ left: 7128, top: 7722 }} />
                        </div>
                    </div>



                </div>

            </div>
            */

        );
    }
}




ReactDOM.render(
    <Animation />,
    document.getElementById('root')
);

