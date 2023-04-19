import { useState } from "react";

function Post (props){

    //functii pt like
    const [emptylike, setEmptylike] = useState("https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png");

    function like (){
        if(emptylike === "https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png")
            setEmptylike("https://учебныепрезентации.рф/image.html?format=raw&id=205&type=img");
        if(emptylike === "https://учебныепрезентации.рф/image.html?format=raw&id=205&type=img")
            setEmptylike("https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png");
    }

    //functii pt comentarii
    const [comment , setComment] = useState("");

    function writecmnt (e){
            setComment(e.target.value);
    }

    function addcmnt (e){
        if(comment !== ""){
            setComment(e.target.value);
            props.comments.push(comment);
        }
    }

    //functii pt scroll

    return(
        <div className = 'postcnt'>
            <div className = 'postheader'>
                <img className = "profileimg" src = {props.profileimg} alt = ""/>
                <h4 className = 'username' >{props.username}</h4>
                <div className = 'optionsdiv' >
                    <span className = 'dots'/>
                    <span className = 'dots'/>
                    <span className = 'dots'/>
                </div>
            </div>

            <div className = 'postimagecnt' >
                {
                    props.postimg.map(item => <img className = 'postimage' src = {item} alt = "" />)
                }
            </div>
            <div className = 'interactions'>
                <img className = 'like' src = {emptylike} alt = '' onClick = {like}/>
                <img className = 'share' src = "https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-05-512.png" alt = ''/>
                <img className = 'save' src = "https://www.freepngimg.com/thumb/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram-thumb.png" alt = ''/>
            </div>
            <div className = 'descriptioncnt'>
                <span className = 'descriptionspan' >
                    <p className = 'description' >{props.username}: {props.description}</p>
                </span>
            </div>
            <div className = 'comentinputcnt' >
                <input value = {comment} type = 'text' className = 'comentinput' placeholder = 'Leave a comment' onChange = {writecmnt}/>
                <button className = {comment !== "" ? "addcomentbtnactive" :'addcomentbtn'} onClick = {addcmnt} >publicate</button>
            </div>
            <div className = "comentsdiv" >
                {
                    props.comments.map(item => <p className = 'coments'>User: {item}</p>)
                }
            </div>
        </div>
    );
}

export default Post;