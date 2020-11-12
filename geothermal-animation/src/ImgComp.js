import React from 'react';
import i1 from "./pics/i1.jpg"
import i2 from "./pics/i2.jpg"
import i3 from "./pics/i3.jpg"
import i4 from "./pics/i4.jpg"
import i5 from "./pics/i5.jpg"

function ImpComp({ src }){
    let imgStyles={width:100+"%",height:"auto"}
    return <img src={i1} alt="slide-img" style={imgStyles}></img>
}
export default ImpComp