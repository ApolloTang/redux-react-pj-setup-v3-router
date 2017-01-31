import React from 'react';

import TodoItem from './todo-item';

const TodoList = (props) => {
    return (<ul>
        {
            props.todos.map((todo, i)=>{
                return (
                    <TodoItem
                        key={i}
                        id={todo.id}
                        text={todo.text}
                        complete={todo.complete}
                        handleRemove={()=>{props.dispatch_remove(todo.id)}}
                        handleComplete={()=>{props.dispatch_complete(todo.id)}}
                    />);
            })
        }
    </ul>);
}


export default  TodoList;

