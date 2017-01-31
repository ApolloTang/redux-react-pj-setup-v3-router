if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: app/index.js'); // eslint-disable-line no-console
}

import React from 'react'
import { render } from 'react-dom'

import FilteredTodos from './containers/filtered-todos';
import AddTodo from './containers/add-todo';
import Control from './components/control-section';

import style from './style';
const App = ({ params }) => {
    return (
        <div className={`app ${style['module-style']}`}>
            <div className="layout">
                <div className="add-todo-container">
                    <AddTodo />
                </div>
                <div className="todos-list-container">
                    <FilteredTodos filterType={params.filterType || 'all'}/>
                </div>
                <div className="filter-ctr-container">
                    <Control />
                </div>
            </div>
        </div>
    );
};

export default App;
