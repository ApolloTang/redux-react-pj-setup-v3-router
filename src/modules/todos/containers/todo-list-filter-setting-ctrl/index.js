import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import {connect} from 'react-redux';

import {mapStoreToProps} from './selector';

class TodoListFilterSettingCtrl extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('componentDidMount: ', this.props.routing);
    }
    handleNavigate() {
        browserHistory.push(`/todo/${this.props.filterType}`);
    }
    render() {
        return (
            <div onClick={this.handleNavigate.bind(this)}>
                {this.props.children}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(TodoListFilterSettingCtrl);
