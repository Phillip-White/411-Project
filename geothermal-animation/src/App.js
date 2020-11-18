import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Summer from './Summer'
import Winter from './Winter'
import Info from './Info'


class App extends React.Component {

    render() {
        return(
            <main>
                <Switch>
                    <Route path="/" component={Info} exact />
                    <Route path="/summer" component={Summer} />
                    <Route path="/winter" component={Winter} />
                    <Route path="/home" component={Info} />
                </Switch>
                
            </main>
        )
    }
}

export default App