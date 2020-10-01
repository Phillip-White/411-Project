import React from 'react'
import Nav from './Nav'
import PopUp from './PopUp'

class Seasons extends React.Component {
    render() {
        return (
            <div className="season">
                <Nav />
                <PopUp />
            </div>
        )
    }
}

export default Seasons