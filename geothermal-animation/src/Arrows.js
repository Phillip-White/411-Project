import React from 'react'
import { arrows } from './onload'
import animationOrder from './data/AnimationOrder'

class Arrows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prev: '',
            curr: '',
            step:0
        }
        this.blink = this.blink.bind(this)
    }

    blink() {
        this.setState({
            curr: animationOrder[this.state.step]
        })
        

        let off = this.state.prev
        let on = this.state.curr
        let i
        if (off !== null) {
            for (i = 0; i < off.length; i++) {
                document.getElementById(off[i]).style.display = 'none'
            }
        }

        for (i = 0; i < on.length; i++) {
            document.getElementById(on[i]).style.display = 'block'
        }

        this.setState({
            prev:this.state.curr
        })
        if (this.state.step < animationOrder.length -1) {
            this.setState({
                step: this.state.step + 1
            })
        }
        else {
            this.setState({
                step:0
            })
        }

    }

    componentDidMount() {
        arrows()
        this.animate = setInterval(this.blink, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.animate)
    }

    render() {
        let pic 
        if (this.props.season === "Summer" && this.props.item._id.startsWith("o")) {
            pic = 'blue_flow_arrow'
        }
        else if (this.props.season === "Summer" && this.props.item._id.startsWith("i")) {
            pic = 'blue_flow_arrow2'
        }
        else if (this.props.season === "Winter" && this.props.item._id.startsWith("o")) {
            pic = 'blue_flow_arrow2'
        }
        else {
            pic = 'blue_flow_arrow'
        }

        let arrow =  require('./pics/' + pic + '.png')
        const arrowStyle = {
            left: this.props.item.left,
            top: this.props.item.top,
            transform: 'rotate(' + this.props.item.rotate + 'deg)',
            display: 'none'
        }
        return (
            <img alt="arrow" src={arrow} id={this.props.item._id} className="arrow" style={arrowStyle}></img>
        )
    }
}


export default Arrows