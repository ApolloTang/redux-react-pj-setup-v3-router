if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import App from 'modules/app';
import Todos from 'modules/todos';
import Twitter from 'modules/twitter';
import FontTest from 'modules/font-test';

import style from './style';

const navigations = [
    {to:'/todo', displayText:'todo'},
    {to:'/twitter', displayText:'twitter'},
    {to:'/font-test', displayText:'font test'},
]

class Root extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={`root ${style['module-style']}`}>
                <Provider store={store}>
                    <Router history={syncHistoryWithStore(browserHistory, store)}>
                        <Route path="/" component={App} >
                            <Route path="/todo(/:filterType)" component={Todos} />
                            <Route path="/twitter" component={Twitter} />
                            <Route path="/font-test" component={FontTest} />
                        </Route>
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default Root;
export {navigations};

