import React from 'react'
import { arrows } from './onload'

class Arrows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top:this.props.item.top
        }
    }

    render() {
        let pic = 'blue_flow_arrow'
        if(this.props.season==="Summer"){
            pic = 'blue_flow_arrow'
       }else{
            pic = 'blue_flow_arrow2'
       }
        let arrow =  require('./pics/' + pic + '.png')
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