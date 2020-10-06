import React from 'react'
import Nav from './Nav'
import PopUp from './PopUp'

class Seasons extends React.Component {

    render() {
        const show = this.props.show
        return (
            <div className="season">
                <Nav />
                <PopUp show={show}/>
            </div>
        )
    }
}

export default Seasons