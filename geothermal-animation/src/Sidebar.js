import React from 'react'
import Nav from './Nav'
import PopUp from './PopUp'

class Sidebar extends React.Component {

    render() {
        return (
            <div className="season">
                <Nav />
                <PopUp pic={this.props.pic} text={this.props.text} show={this.props.show} season={this.props.season} /> 
            </div>
        )
    }
}

export default Sidebar