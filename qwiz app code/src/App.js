import React, { useState } from 'react';
import "./App.css";
import Question from './components';
import { MainContainer } from './components';
import { Buttons } from './components';
import Score from './score';
import { Restart } from './components';

function App (){

const[Answers , setAnswers] = useState([
    {   text: "Maybach GLS",
        value: false,
        id: 1
    },
    {   text: "Bentley Bentayga",
        value: false,
        id: 2
    },
    {   text: "Rolls Royce Phantom",
        value: true,
        id: 3
    },
    {   text: "Lamborghini Huracan",
        value: false,
        id: 4
    },
    {   text: "Python",
        value: false,
        id: 5
    },
    {   text: "C#",
        value: false,
        id: 6
    },
    {   text: "C++",
        value: false,
        id: 7
    },
    {   text: "Javascript",
        value: true,
        id: 8
    },
    {   text: "DEV C++",
        value: false,
        id: 9
    },
    {   text: "Visual Studio Code",
        value: true,
        id: 10
    },
    {   text: "Visual Studio",
        value: false,
        id: 11
    },
    {   text: "CodeBlocks",
        value: false,
        id: 12
    }
]);

const[ask , setAsk] = useState([
    {
        text: "Wich car is the most expensive ?",
        id: 1
    },
    {
        text: "Wich programming language is used in ReactJS ?",
        id: 5
    },
    {
        text: "Which IDE is the most used by FrontEnd developers ?",
        id: 9
    }
]);

const[askk , setAskk] = useState([])
const[renderAnswers , setRenderAnswers] = useState([]);
const[ok1 , setOk1] = useState(1);
const[ok , setOk] = useState(4);
const[gameScore , setGameScore] = useState(0);


function filtered (){

        setRenderAnswers(Answers.filter(el => el.id <= ok && el.id >= ok1))
        setOk1(ok1 + 4);
        setOk(ok + 4);
}

function filteredd (e){
    console.log(e);
    setOk1(ok1 + 4);
    setOk(ok + 4);
        setRenderAnswers(Answers.filter(el => el.id <= ok && el.id >= ok1))
        setAskk(ask.filter(item => (item.id >= ok1 && item.id <= ok)))
}

return(
    <div>
        <Score ok1 = {ok1} gameScore = {gameScore} setGameScore = {setGameScore} />
        <Question ok = {ok} ok1 = {ok1} askk = {askk} setAskk = {setAskk} id = 'quest'/>
        <MainContainer ok1 = {ok1} gameScore = {gameScore} setGameScore = {setGameScore} filteredd = {filteredd} renderAnswers = {renderAnswers} Answers = {Answers}/>
        <Buttons ok = {ok} ok1 = {ok1} filtered = {filtered} filteredd = {filteredd}/>
        <Restart ok1 = {ok1} />
    </div>
);

}
export default App;