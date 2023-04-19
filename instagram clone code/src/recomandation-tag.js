function Recomand (props){

    return(
        <div className = 'recomandcnt'>
            <img className = 'recomandimg' alt = '' src = {props.src}/>
            <div className = 'recomandh4div'>
                <h4>{props.name}</h4>
            </div>
            <button className = 'recomandbtn' >{props.btntxt}</button>
        </div>
    );
}

export default Recomand;