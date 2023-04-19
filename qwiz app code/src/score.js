function Score (props){
    return(
        <div className = {props.ok1 > 16 ? 'score' : 'nothing'}>
            <h1 id = 'scrh1'>your score is {props.gameScore}:</h1>
        </div>
    );
}

export default Score;