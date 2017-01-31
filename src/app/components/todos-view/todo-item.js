import React from 'react';

const TodoItem = ({text, handleComplete, handleRemove, complete}) => {
    return (
        <li>
            <span
                style={{ textDecoration: complete ? 'line-through':'none' }}
                onClick={handleComplete}>
                {text}
            </span>
            <span onClick={handleRemove}>[x]</span>
        </li>
    );
}

export default TodoItem;
