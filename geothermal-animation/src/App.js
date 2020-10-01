import React from 'react';
import Seasons from './Seasons'
import Map from './Map'

class App extends React.Component {
    render() {
        return (
            <div className="page">
                <Seasons />
                <Map />
            </div>
       )
    }
}

export default App;