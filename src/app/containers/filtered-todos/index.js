import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';

import TodoList from 'app/components/todos-view';

export default connect(mapStoreToProps, mapDispatchToProps)(TodoList);
