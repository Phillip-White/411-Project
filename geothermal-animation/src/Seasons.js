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
        const pic = this.props.pic
        const text = this.props.text
        const show = this.props.show

        return (
            <div className="season">
                <Nav />
                <PopUp pic={pic} text={text} show={show} />
            </div>
        )
    }
}

export default Seasons