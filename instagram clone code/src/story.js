const Story = (props) => {

    const wiewed = () => {
        props.setPeople(props.people.map(item => {
            if(item.id === props.id){
                return{
                    ...item,
                    new: false
                }
            }
            return item;
        }))
    }
        

    return(
            <div className = 'story' onClick = {wiewed}>
                <img className = {props.new === true ? "story-img-active" : "story-img"} src = {props.src} alt = ""/>
                <span className = 'story-h6-div'>
                    <h6>{props.name}</h6>
                </span>
            </div>
    );
}


export default Story;