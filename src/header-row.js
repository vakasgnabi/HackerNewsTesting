import React from 'react';


function HeaderRow(){
    return (
        <div className="row header-row">
            <div className="col-md-3">
                <img src="..\images\y18.gif" width="18" height="18" className="header-img" />
                <strong className="heading-txt">Hacker News</strong>
            </div>
            <div className="col-md-7 middle-links">
                <a href="#">new</a> | <a href="#">past</a> | <a href="#">comments</a> | <a href="#">ask</a> | <a href="#">show</a> | <a href="#">jobs</a> | <a href="#">submit</a>
            </div>
            <div className="col-md-2 login-link">
                <a href="#">Login</a>
            </div>
        </div>
    )
}

export default HeaderRow;