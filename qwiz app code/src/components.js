
function Question (props){

    return(
        <div className = {props.ok1 > 1 && props.ok1 < 16 ? 'qcontainer' :  'nothing'}>
            {props.askk.map(item => (
                <h3 id = 'question'>{item.text}</h3>
            ))}
        </div>
    );

}

export function Answer (props){

    function increment (){
        if(props.value === true){
            props.setGameScore(props.gameScore + 1);
        }
    }


    return(
        <div onClick = {() => {increment(); props.filteredd()}} className = 'answercontainer'>
            <span className = 'answertxt'>{props.text}</span>
        </div>
    );

}

export function MainContainer (props){

    return(
        <div className = {props.ok1 > 1 && props.ok1 < 16 ? "maincnt" : "nothing"}>
                {props.renderAnswers.map(item =>(
                    <Answer value = {item.value} setGameScore = {props.setGameScore} gameScore = {props.gameScore} filteredd = {props.filteredd} text = {item.text}/>
                ))}
        </div>
    );

}

export function Buttons (props){


    return(
        <div className = {props.ok1 > 0 && props.ok1 < 16 ? "buttonsdiv" : 'nothing' }>
            <span onClick ={props.filteredd} className = {props.ok1 === 1 ? "start" : "nothing"}>
                <h3>Start</h3>
            </span>
        </div>
    );
}

export function Restart (props){

    function reload (){
        window.location.reload();
    }

    return(
        <div onClick = {reload}  className = {props.ok1 >= 16 ? "restart" : "nothing"} >
            <h3>Restart</h3>
        </div>
    );

}

export default Question;