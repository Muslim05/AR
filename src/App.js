import React, { Component } from 'react'
import store from './redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import './_general/config.firebase'
import history from './history'
import Routes from './routes'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Routes />
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App
