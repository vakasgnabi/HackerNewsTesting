import React from 'react';
import ReactDOM from 'react-dom';
import HeaderRow from './header-row';
import NewsList from './NewsList';
import {stories} from './static-data';
import './index.css';


function HackerNewsMain({stories}){
    return(
        <div className="container main-div">
            <HeaderRow />
            <NewsList stories={stories} />
            
        </div>
    )
}


ReactDOM.render(<HackerNewsMain stories={stories} />,document.querySelector("#root"));
