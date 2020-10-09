import React from 'react'

class PopUp extends React.Component {

    render() {

        let popUp = require('./pics/' + String(this.props.pic) + '.jpg')

        let style = {visibility: this.props.show}

        return (
            <div id="pop-up" style={style} >
                <img alt="part" src={popUp} id="pop-up-image" />
                <p id="words">
                    <span id="tab"></span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Tempor orci dapibus ultrices in iaculis. Vulputate eu scelerisque felis imperdiet. Pellentesque diam volutpat commodo sed egestas.
                    Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Duis tristique sollicitudin nibh sit amet commodo nulla. 
                    Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Ultrices vitae auctor eu augue ut lectus. 
                    Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Eget lorem dolor sed viverra ipsum nunc. 
                    Aliquet nec ullamcorper sit amet risus. Arcu felis bibendum ut tristique et.
                </p>
            </div>
        )
    }
}

export default PopUp