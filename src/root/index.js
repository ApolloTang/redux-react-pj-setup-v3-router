if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Todos from 'modules/todos';
import store from './store';

import style from './style';
class Root extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={`root ${style['module-style']}`}>
                <Provider store={store}>
                    <Router history={syncHistoryWithStore(browserHistory, store)}>
                      <Route path="/(:filterType)" component={Todos} />
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default Root;



