import React from 'react';

const Todo = (props) => {

    const dlt = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.todoo.id));
    };

    const cmplt = () =>{
        props.setTodos(props.todos.map(
            (item) =>{
                if(props.todoo.id === item.id){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            }
        ))
    }

    return(
        <div className = 'todo'>
            <h1 className = {props.todoo.completed ? "taskk" : "task"}>{props.text}</h1>
            <button onClick = {dlt} className = 'todobtn'></button>
            <button onClick = {cmplt} className = 'complete' ></button>
        </div>
    );
}

export default Todo;