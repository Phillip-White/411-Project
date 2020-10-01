import React from 'react'
import fun from './onload'

function ClickAreas(props) {
    const areaStyle = {
        left: props.area.left,
        top: props.area.top,
        width: props.area.width,
        height: props.area.height
    }
    return (
        <div className="area" title={props.area.title} id={props.area.id} name={props.area.name} style={areaStyle}>
        </div>
    )
    fun.transposeAreaSize()
}


export default ClickAreas