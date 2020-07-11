import React, { Component } from 'react';
import {observe, streamProps} from 'frint-react';

class Root extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Header for Multiple React App Example</h1>
                <nav>
                    <ul>
                        <li>
                           Home 
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default observe((app) => {
    const store = app.get('store');

    return streamProps()
    .setDispatch({}, store)
    .set(
        store.getStates$(),
        state => ({})
    )
    .set(
        app.getAppOnceAvailable$('Page'),
        pageApp => pageApp.get('store').getStates$(),
        pageState =>({})
    )
    .get$()
})(Root);