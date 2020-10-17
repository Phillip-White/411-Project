import React from 'react'
import Sidebar from './Sidebar'

class Info extends React.Component {
    constructor() {
        super()
        this.state = {
            //popUP info (display, picture and text)
            showPopUp: false,
        }
    }


    render() {
        const show = this.state.showPopUp

        return (
            <div>
                <Sidebar show={show} />
                <h1>Info Page</h1>
            </div>
            )
    }
}

export default Info