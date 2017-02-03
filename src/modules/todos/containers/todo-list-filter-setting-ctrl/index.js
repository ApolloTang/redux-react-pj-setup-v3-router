import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import {connect} from 'react-redux';

import {mapStoreToProps} from './selector';

function getPath(paramsFilterType, routingPathName) {
    // For example:
    //     routingPathName can be: '/aaa/bbb/ccc/:filterType' or '/aaa/bbb/ccc'
    //     this function will always return the path: '/aaa/bbb/ccc'
    if (routingPathName === void 0) return void 0;
    const pathParts = routingPathName.split('/');
    (paramsFilterType) ? pathParts.pop() : pathParts;
    const path = pathParts.join('/');
    return path;
}

class TodoListFilterSettingCtrl extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const paramsFilterType = _.get(this.props, `params.filterType`, void 0);
        const routingPath = _.get(this.props, `routing.pathname`, void 0);
        this.path=getPath(paramsFilterType, routingPath);
    }

    componentWillReceiveProps(nextProps) {
        const paramsFilterType = _.get(nextProps, `params.filterType`, void 0);
        const routingPath = _.get(nextProps, `routing.pathname`, void 0);
        this.path=getPath(paramsFilterType, routingPath);
    }

    handleNavigate() {
        const path = this.path;
        if (path) {
            browserHistory.push(`${path}/${this.props.filterType}`);
        }
    }

    render() {
        return (
            <div onClick={this.handleNavigate.bind(this)}>
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TodoListFilterSettingCtrl);
