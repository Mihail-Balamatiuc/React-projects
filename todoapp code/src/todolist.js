import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    return(
        <div className = 'tdlcnt'>
            <h1 id = 'tdlcnttxt'>You need to do:</h1>
            <ul>
                {props.flt.map(todo =>(
                    <Todo text = {todo.text} key = {todo.id} todoo = {todo} setTodos = {props.setTodos} todos = {props.todos} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;