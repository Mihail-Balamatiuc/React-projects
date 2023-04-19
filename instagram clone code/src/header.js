function Header (){

    return(
        <div className = 'header'>
            <span className = 'logodiv'>
                <img src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt = ""/>
            </span>
            <input id = 'search'  placeholder = 'search' />
            <div className = 'header-buttons'>
                <img id = 'home-btn' src = "https://icon-library.com/images/home-icon-transparent/home-icon-transparent-18.jpg" alt = ""/>
                <img className = 'img-buttons' src = "https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-05-512.png" alt = ""/>
                <img id = 'search-mini' src = "http://assets.stickpng.com/thumbs/585e4ad1cb11b227491c3391.png" alt = ""/>
                <img className = 'img-buttons' src = "https://static.thenounproject.com/png/682475-200.png" alt = ""/>
                <img className = 'img-buttons' src = "https://i.pinimg.com/originals/80/1b/51/801b51a0cb5865aa77246e61caff1a8f.png" alt = ""/>
                <img className = 'img-buttons' src = "https://icon-library.com/images/instagram-heart-icon/instagram-heart-icon-17.jpg" alt = ""/>
                <img className = 'img-buttons' src = "https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png" alt = ""/>
            </div>
        </div>
    );
}

export default Header;