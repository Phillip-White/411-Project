import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h3><Link to="/summer">Summer</Link></h3>
                    <h3><Link to="/winter">Winter</Link></h3>
                    <h3><Link to="/info">Info</Link></h3>
                </div>
            </div>
        )
    }
}

export default Nav