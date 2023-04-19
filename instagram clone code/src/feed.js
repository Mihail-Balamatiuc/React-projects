import { useState } from "react";
import Post from "./posts";

function Feed () {


    const[postinf, setPostinf] = useState([
        {
            username: "Messi",
            profileimg: "https://remezcla.com/wp-content/uploads/2017/07/Messi_sports_getty-150x150.jpg",
            postimg: ["https://socialcoral.com/wp-content/uploads/2018/10/1539975776_Leo-Messi-Instagram.jpg",
                      "https://socialcoral.com/wp-content/uploads/2018/10/1539975776_Leo-Messi-Instagram.jpg"],
            description: "Sometimes you need to rest on sunch a intensive training , but dont't go away from the ball.",
            comments:[]
        },
        {
            username: "Cristiano",
            profileimg: "https://static01.nyt.com/images/2021/08/28/sports/27soccer-ronaldo-print/27soccer-ronaldo-1-mediumSquareAt3X.jpg",
            postimg: ["http://www.nairaland.com/attachments/5603163_ronaldo_jpegf711fdbf7ee9ba7496cba8292374166b",
                      "http://www.nairaland.com/attachments/5603163_ronaldo_jpegf711fdbf7ee9ba7496cba8292374166b"],
            description: "If you have a dream , then try to realise it , now a part from my dream became true, look at this golden ball.",
            comments: []
        },
        {
            username: "Neymar",
            profileimg: "https://images.wsj.net/im-345146/square",
            postimg: ["https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/08/113689.jpg",
                      "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/08/113689.jpg"],
            description: "Before the 5th goal scored on that match , love to play in PSJ with all my heart, and love my admirators !",
            comments: []
        },
        {
            username: "Kylian_Mbappe",
            profileimg: "https://competitions.teamtalk.com/image-library/square/1000/2/2cbbba3c8d5f-teamtalk-com.jpg",
            postimg: ["https://new.in-24.com/content/uploads/2021/08/26/2db50d4b2c.jpg",
                      "https://new.in-24.com/content/uploads/2021/08/26/2db50d4b2c.jpg"],
            description: "My life my rules",
            comments: []
        },
        {
            username: "Lebron_James",
            profileimg: "https://answel.com/wp-content/uploads/2020/12/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg",
            postimg: ["https://e0.365dm.com/21/02/2048x1152/skysports-nba-los-angeles-lakers_5268563.jpg",
                      "https://e0.365dm.com/21/02/2048x1152/skysports-nba-los-angeles-lakers_5268563.jpg"],
            description: "Let's do some dunks today",
            comments: []
        }
    ]);


    return(
        <div className = 'feed' >
            {
                postinf.map(item => <Post profileimg = {item.profileimg} username = {item.username} postimg = {item.postimg} description = {item.description} comments = {item.comments}/> )
            }
        </div>
    );
}

export default Feed;