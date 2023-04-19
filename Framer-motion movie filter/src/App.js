import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css";
import { CardDiv } from './movie-render';

function App (){

    const movies = ([
        {
            name: "Naruto",
            image: "https://static.posters.cz/image/1300/postere/naruto-shippuden-i84239.jpg",
            janre: ['comedy'],
            key: 2
        },
        {
            name: "Spider Man NWH",
            image: "https://static.cinemagia.ro/img/db/movie/29/56/901/spider-man-no-way-home-164834l.jpg",
            janre: ['comedy','action'],
            key: 3
        },
        {
            name: "Demon Slayer",
            image: "https://demonslayer-anime.com/assets_portal/img/main/img_mugentrainarc.jpg",
            janre: ['action', 'comedy'],
            key: 1
        },
        {
            name: "Uncharted",
            image: "https://noguiltfangirl.com/wp-content/uploads/2022/02/uncharted-movie-poster.-is-uncharted-ok-for-kids.jpg",
            janre: ['action','comedy'],
            key: 4
        },{
            name: "Batman",
            image: "https://images-na.ssl-images-amazon.com/images/I/81DGyn3r62L.jpg",
            janre: ['action'],
            key: 5
        },
        {
            name: "Hotel Transilvania",
            image: "https://ehstalon.com/wp-content/uploads/2022/02/hotel-trans.jpg",
            janre: ['comedy'],
            key: 6
        },{
            name: "Doctor Strange",
            image: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/doctor_strange_cameos.jpg",
            janre: ['action'],
            key: 7
        },
        {
            name: "Focus",
            image: "https://m.media-amazon.com/images/M/MV5BMTUwODg2OTA4OF5BMl5BanBnXkFtZTgwOTE5MTE4MzE@._V1_.jpg",
            janre: ['action'],
            key: 8
        },{
            name: "Spider Man",
            image: "https://i.pinimg.com/originals/56/80/84/568084778b6e51eeacb35b8c4e71f2cc.jpg",
            janre: ['comedy'],
            key: 9
        },
        {
            name: "Spider Man",
            image: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
            janre: ['comedy'],
            key: 10
        },
        {
            name: "Inoske",
            image: "https://pm1.narvii.com/7636/a607b5fb432c058f6414e56d3a06b61994c8a18dr1-1080-1838v2_hq.jpg",
            janre: ['comedy'],
            key: 11
        },
        {
            name: "Yoriichi",
            image: "https://wallpaperaccess.com/full/7141292.jpg",
            janre: ['action'],
            key: 12
        }
    ]);

    const[filtered, setFiltered] = useState(movies);

    const[type, setType] = useState('all');

    useEffect(() => {
        if(type === 'all')
            setFiltered(movies);
        else
            setFiltered(movies.filter(item => item.janre.includes(type)));
    }, [type]);

    function appear(){
        if(document.getElementById("mini2").style.height === "350px"){
            document.getElementById("mini2").style.height = "0px";
            document.getElementById("mini2").style.border = "none";
        }
        else{
            document.getElementById("mini2").style.height = "350px";
            document.getElementById("mini2").style.border = "1px solid black";
        }

    }
    

return(
    <div id = 'main'>
        <div id = 'main-box'>
            <div id = 'header'>
                <h1>Movie list</h1>
                <div id = 'mini'>
                    <button className = 'filter-buttons' onClick={appear} >menu</button>
                    <div id='mini2'>
                        <button className = {type === 'all' ? 'filter-buttons' : 'active-buttons'} onClick={()=> setType('all')}>All</button>
                        <button className = {type === 'comedy' ? 'filter-buttons' : 'active-buttons'} onClick={()=> setType('comedy')}>Comedy</button>
                        <button className = {type === 'action' ? 'filter-buttons' : 'active-buttons'} onClick={()=> setType('action')}>Action</button>
                    </div>
                </div>
            </div>
            <div id = 'filter-buttons-div'>
                <button className = {type === 'all' ? 'filter-buttons' : 'active-buttons'} onClick={()=> setType('all')}>All</button>
                <button className = {type === 'comedy' ? 'filter-buttons' : 'active-buttons'} onClick={()=> setType('comedy')}>Comedy</button>
                <button className = {type === 'action' ? 'filter-buttons' : 'active-buttons'} onClick={()=> setType('action')}>Action</button>
            </div>
            <CardDiv filtered = {filtered}/>
        </div>
    </div>
);

}
export default App;