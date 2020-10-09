import React from 'react';
import Seasons from './Seasons'
import Map from './Map'

class App extends React.Component {
    _isMounted = false

    constructor() {
        super()
        this.state = {
            showPopUp: 'hidden',
            pics: 'Boiler'
        }
        this.click = this.click.bind(this)
        this.mapRender = this.mapRender.bind(this)
    }

    componentDidMount() {
        this._isMounted = true
    }

    click() {
        this.setState({
            showPopUp: 'visible'
        })
    }

    mapRender() {
        if (this._isMounted) {
            return <Map click={this.click} />
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        const map = this.mapRender
        const show = this.state.showPopUp
        const pic = this.state.pics

        return (
            <div className="page">
                <Seasons show={show} pic={pic} />
                {map}
            </div>
       )
    }
}

export default App