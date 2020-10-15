import React from 'react'
import arrow from './pics/heat_flow_arrow.png'

function MoreArrows(props) {
    const arrowStyle = {
        left: props.item.left,
        top: props.item.top,
        transform: 'rotate(' + props.item.rotate + 'deg)'
    }

    return (
        <img alt="arrow" src={arrow} id={props.item.id} className="moreArrow" style={arrowStyle}></img>
    )

}


export default MoreArrows