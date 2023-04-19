import React, { useEffect, useState } from 'react';
import Form from './components';
import TodoList from './todolist';
import { Chnage } from './components';
import "./App.css";

function App (){

    const [txt , setTxt] = useState("");

    const [todos , setTodos] = useState([]);

    const [selector , setSelector] = useState('All');

    const [flt , setFlt] = useState([]);

    function filtered (){
        switch(selector){
            case 'Completed':
                setFlt(todos.filter(todo => todo.completed === true))
                break;
            case 'Incompleted':
                setFlt(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFlt(todos)
                break;
        }
    };

    useEffect(() => { filtered() },[selector,todos]);

    return(
        <div>
            <h1 id = 'title1'>Todo list :</h1>
            <Form txt = {txt} setText = {setTxt} todos = {todos} setTodos = {setTodos} />
            <TodoList flt = {flt} todos = {todos} setTodos = {setTodos}/>
            <Chnage setSelector = {setSelector} />
        </div>
    );
}

export default App;