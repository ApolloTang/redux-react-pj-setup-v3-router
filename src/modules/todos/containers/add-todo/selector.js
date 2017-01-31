import {addTodo as Action_addTodo } from 'modules/todos/actions/todos';

const mapStoreToProps = store=>({});

const mapDispatchToProps = dispatch => ({
    dispatch_addTodo(text) { dispatch( Action_addTodo(text) ); }
});


export {mapStoreToProps, mapDispatchToProps};
