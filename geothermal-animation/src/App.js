import React from 'react';
import Seasons from './Seasons'
import Map from './Map'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            showPopUp: 'hidden'
        }
        this.click = this.click.bind()
    }

    click() {
        this.setState({
            showPopUp: 'visible'
        })
        console.log("click")
    }

    render() {
        const show = this.state.showPopUp
        return (
            <div className="page">
                <Seasons show={show} />
                <Map click={this.click} />
            </div>
       )
    }
}

export default App;