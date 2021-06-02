/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, jsx} from '@emotion/react';
import { useTodosDispatch } from '../contexts/TodosContext';

export type TodoItemProps = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
}

function TodoItem({todo}: TodoItemProps) {

    const DoneOrNotText:string = todo.done ? `color: #999999; text-decoration: line-through;`: `cursor: pointer`;

    const dispatch = useTodosDispatch();

    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id: todo.id
        });
    };

    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id: todo.id
        });
    };
    
    return(
        <li>
            <span 
                css={css`${DoneOrNotText}`} onClick={onToggle}>
                    {todo.text}
            </span>
            <span 
                css={css`
                        color: red;
                        margin-left: 4px;
                        cursor: pointer;
                    `} onClick={onRemove}>
                (X)
            </span>
        </li>
    );
}

export default TodoItem;