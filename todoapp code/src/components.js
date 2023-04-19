import React  from 'react';

const Form = (props) => {

    const imputText = (e) =>{
            props.setText(e.target.value);
    }

    const updateTodos = () => {
        if(props.txt.length > 0){

        props.setTodos([
            ...props.todos , 
            {
                text: props.txt,
                id: Math.random() * 1000,
                completed: false
            }
        ]);
        props.setText("");
    }
    }

    const entpress = e =>{
        if(e.key === 'Enter')
            updateTodos();
    }

    return(
        <div id = 'main'> 
            <input value = {props.txt} placeholder = 'Type todo here ...' type = 'text' id = 'imput1' onChange = {imputText} onKeyPress = {entpress} ></input>
            <button id = 'butt1' onClick = {updateTodos} type = "submit">Add</button>
        </div>
    );
}

export const Chnage = (props) => {

    const slct = (e) =>{
        props.setSelector(e.target.value);
    }

    return(
        <span id = 'sel' >
            <select id = "selector" onChange = {slct} >
                <option>All</option>
                <option>Completed</option>
                <option>Incompleted</option>
            </select>
        </span>
    )
}

export default Form;
