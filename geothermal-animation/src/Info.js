import React from 'react'
import Sidebar from './Sidebar'

class Info extends React.Component {
    constructor() {
        super()
        this.state = {
            //popUP info (display, picture and text)
            showPopUp: false,
            pic: 'Boiler',
            text: ''
        }
        this.click = this.click.bind(this)
    }

    //when a click area is clicked change the state to re-render page (popup)
    click(picture) {
        this.setState({
            showPopUp: true
        })
        this.setState({
            pic: picture.name
        })
        this.setState({
            //will be desc when we have all the info
            text: picture.title
        })
    }

    render() {
        const show = this.state.showPopUp
        const pic = this.state.pic
        const text = this.state.text
        return (
            <div>
                <Sidebar show={show} pic={pic} text={text} />
                <h1>Info Page</h1>
            </div>
            )
    }
}

export default Info