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
                text = "During the summer, as air is circulated through the building, the heat pump removes heat from the air and transfers it to the fluid that circulates to the ground."
                +" The experience of cold air blowing into the building is the result of the process of removing heat from the circulated air (the red arrows moving down), transfering the heat "
                +"to the ground, and returning cool air back to the building (the blue arrows moving up)."
            }
            else if(this.props.season ==="Info"){
                location = "whitespace"
                text = ""
            }
            else {
                location = 'CoolingTower'
                text = "During the winter, as air is circulated through the building, the heat pump absorbs heat from the ground, concentrates it, and then transfers it to the circulated"
                +"air. The experience of heated air blowing into the building is the result the process of absorbing heat from the ground and transfering it to the circulated air (the red"
                +"arrows moving up)"
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