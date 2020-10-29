import React from 'react'
import arrow from './pics/blue_flow_arrow.png'
import arrow2 from './pics/heat_flow_arrow.png'

function Arrows(props) {
    let src
    const arrowStyle = {
        left: props.item.left,
        top: props.item.top,
        transform: 'rotate(' + props.item.rotate + 'deg)'
    }
    if (props.item.id.startsWith("o")) {
        src = arrow
    }
    else {
        src = arrow2
    }

    return (
        <img alt="arrow" src={src} id={props.item.id} className="arrow" style={arrowStyle}></img>
    )

}


export default Arrows