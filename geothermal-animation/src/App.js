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
                    <Route path="/" component={Summer} exact />
                    <Route path="/Summer" component={Summer} />
                    <Route path="/Winter" component={Winter} />
                    <Route path="/Info" component={Info} />
                </Switch>
            </main>
        )
    }
}

export default App