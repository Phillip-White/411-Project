 import React from 'react'
import { transposeAreaSize } from './onload'


class ClickAreas extends React.Component {

    componentDidMount() {
        transposeAreaSize()
    }

    render() {
        const areaStyle = {
            left: this.props.area.left,
            top: this.props.area.top,
            width: this.props.area.width,
            height: this.props.area.height
        };

        return (
            <div>
                <div className="area" onClick={() => this.props.click(this.props.area)} title={this.props.area.title} id={this.props.area._id} name={this.props.area.name} style={areaStyle}>
                </div >
            </div>
        )
    }
}


export default ClickAreas