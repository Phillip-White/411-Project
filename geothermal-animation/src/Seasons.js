import React from 'react'
import Nav from './Nav'
import PopUp from './PopUp'

class Seasons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: this.props.show,
            pic: this.props.pic
        }
    }

    render() {

        return (
            <div className="season">
                <Nav />
                <PopUp show={this.state.show} pic={this.state.pic} />
            </div>
        )
    }
}

export default Seasons