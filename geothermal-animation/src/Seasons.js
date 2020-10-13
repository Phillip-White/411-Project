import React from 'react'
import Nav from './Nav'
import PopUp from './PopUp'

class Seasons extends React.Component {

    popUpRender(pass) {
        if (this.props.show) {
            return <PopUp pic={pass[0]} text={pass[1]} />

        }
    }

    render() {
        const pass = [ this.props.pic, this.props.text ]
        const popUpRender = this.popUpRender(pass)

        return (
            <div className="season">
                <Nav />
                {popUpRender}
            </div>
        )
    }
}

export default Seasons