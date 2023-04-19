import React from 'react';
import "./App.css";
import Header from './header';
import Stories from './stories';
import Sticky from './sticky';
import Feed from './feed';

function App (){

return(
    <div>
        <Header/>
        <div className = 'main'>
            <div className = 'entertainment' >
                <Stories/>
                <Feed/>
            </div>
            <div className = 'sticky-div' >
                <Sticky/>
            </div>
        </div>
    </div>
);

}
export default App;