import { useState } from "react";
import Story from "./story";

function Stories (){


    const [people , setPeople] = useState([
        {
            name: 'Robert',
            src: "https://i.pinimg.com/originals/cc/90/47/cc90479375ca6a9cf51de146fc886f77.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Swift',
            src: "https://images-na.ssl-images-amazon.com/images/I/61KDZKrU2iL.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Captain',
            src: "https://assets.bigcartel.com/product_images/266227937/CapIW_Square.jpg?auto=format&fit=max&w=1500",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Tom',
            src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tom-holland-spider-man-1564104864.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Zack',
            src: "https://s3.wizaz.pl/newsy/zac-efron-4294906137-1_1.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Lyly',
            src: "https://64.media.tumblr.com/3f535282de4976db3b778d1c30faa341/tumblr_inline_oaq1pxeVzF1tae3h3_250.gifv",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Neymar',
            src: "https://images.wsj.net/im-345146/square",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Messi',
            src: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Messi',
            src: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Messi',
            src: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Messi',
            src: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Messi',
            src: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Messi',
            src: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Messi',
            src: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            id: Math.random() * 1000,
            new: true
        },
        {
            name: 'Messi',
            src: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            id: Math.random() * 1000,
            new: true
        }
]);

let ok = 7.5;
let ok1 = 0;

function right () {
    
    var x = document.getElementsByClassName("story").length;
    if(ok < x){
    ok1 = ok1 - 620;
    
    for(var i = 0; i < x; i++){
        document.getElementsByClassName("story")[i].style.transform = `translateX(${ok1}px)`;
    }
    ok = ok + 7.5;
}
}

function left () {

    var x = document.getElementsByClassName("story").length;
    if(ok > 7.5){
    ok1 = ok1 + 620;

    for(var i = 0; i < x; i++){
        document.getElementsByClassName("story")[i].style.transform = `translateX(${ok1}px)`;
    }
    ok = ok - 7.5;
}
}


    return(
        <div className = 'story-div'>
            {
                people.map(item => (
                    <Story src = {item.src} name = {item.name} id = {item.id} new = {item.new} people = {people} setPeople = {setPeople} />
                ))
            }
            <button id = 'right' onClick = {right}>→</button>
            <button id = 'left' onClick = {left}>←</button>
        </div>
    );
}

export default Stories;