import React from 'react'
import arrow from './pics/blue_flow_arrow.png'
import { arrows } from './onload'

class Arrows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top:this.props.item.top
        }
    }
    componentDidMount() {
        arrows()
    }
    render() {
        const arrowStyle = {
            left: this.props.item.left,
            top: this.props.item.top,
            transform: 'rotate(' + this.props.item.rotate + 'deg)'
        }
        return (
            <img alt="arrow" src={arrow} id={this.props.item.id} className="arrow" style={arrowStyle}></img>
        )
    }
}


export default Arrows