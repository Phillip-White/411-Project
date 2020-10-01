import React from 'react'
import arrow from './pics/blue_flow_arrow.png'
import fun from './onload'

function Arrows(props) {
    const arrowStyle = {
        left: props.item.left,
        top: props.item.top,
        transform: 'rotate(${props.item.rotate}deg)'
    }
    return (
        <img src={arrow} id={props.item.id} className="arrow" style={arrowStyle} />

    )
    fun.arrowTranspose()

}


export default Arrows