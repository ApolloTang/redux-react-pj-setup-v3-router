import React from 'react'
import { Link } from 'react-router';
import {connect} from 'react-redux';

import {mapStoreToProps} from './selector';

const TodoListFilterSettingCtrl = ({children, filterType}) => (
    <Link
        to={filterType}
        activeStyle={{ textDecoration: 'none', color:'red' }} >
        {children}
    </Link>
);

export default connect(mapStoreToProps)(TodoListFilterSettingCtrl);
