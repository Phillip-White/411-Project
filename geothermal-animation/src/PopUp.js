import React from 'react'

class PopUp extends React.Component {

    render() {
        let location = ''
        let text = ''
        if (this.props.show) {
            location = String(this.props.pic)
            text = String(this.props.text)
        }
        else {
            if (this.props.season === "Summer") {
                location = 'Boiler'
                text = "Replace with summer text"
            }
            else {
                location = 'CoolingTower'
                text = "Replace with winter text"
            }
        }
        let popUp = require('./pics/' + location + '.jpg')

        return (
            <div id="pop-up" >
                <img alt="part" src={popUp} id="pop-up-image" />
                <p id="words">
                    <span id="tab"></span>
                    {text}
                </p>
            </div>
        )
    }
}

export default PopUp