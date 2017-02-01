if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/app/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';
import SimpleNavigation from 'widgets/simple-navigation';

import style from './style';

const navigations = [
    {to:'todo', displayText:'todo'},
    {to:'facebook.com', displayText:'facebook'}
]

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`app ${style['module-style']}`} >
                <SimpleNavigation navigations={navigations}/>
                {this.props.children}
            </div>
        );
    }
}

export default App;


