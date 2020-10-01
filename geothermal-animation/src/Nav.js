import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Router>
                        <h3><Link to="/summer">Summer</Link></h3>
                        <h3><Link to="/winter">Winter</Link></h3>
                        <h3><Link to="/info">Info</Link></h3>
                    </Router>                   
                </div>
            </div>
        )
    }
}

export default Nav