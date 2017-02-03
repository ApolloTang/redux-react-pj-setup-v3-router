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
import FontTest from 'modules/font-test';
import LazyLoad from 'modules/lazy-load';

import style from './style';

const navigations = [
    {to:'/todos', displayText:'todo'},
    {to:'/font-test', displayText:'font test'},
    {to:'/lazy-load', displayText:'lazy load'},
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
                            <IndexRoute component={()=>(<div className="home">Home</div>)} />
                            {/*
                                <Route path="/todos(/:filterType)" component={Todos} />

                                The above works, however <Link> will not show active if navigate to
                                its decendent (:filterType). The solution is at following as
                                mentioned in:
                                    https://github.com/ReactTraining/react-router/issues/1684
                            */}
                            <Route path="/todos" component={Todos} >
                                <Route path=":filterType" component={Todos} />
                            </Route>
                            <Route path="/font-test" component={FontTest} />
                            <Route path="/lazy-load" component={LazyLoad} />
                        </Route>
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default Root;
export {navigations};

