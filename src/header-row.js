import React from 'react';


function HeaderRow() {
    return (
        <div className="row header-row">
            <div className="col-md-3">
                <img alt="logo" src="..\images\y18.gif" width="18" height="18" className="header-img" />
                <strong className="heading-txt">Hacker News</strong>
            </div>
            <div className="col-md-7 middle-links">
                <button type="button" className="btn btn-link">new</button> | <button type="button" className="btn btn-link">past</button> | <button type="button" className="btn btn-link">comments</button> | <button type="button" className="btn btn-link">ask</button> | <button type="button" className="btn btn-link">show</button> | <button type="button" className="btn btn-link">jobs</button> | <button type="button" className="btn btn-link">submit</button>
            </div>
            <div className="col-md-2 login-link">
                <button type="button" className="btn btn-link">Login</button>
            </div>
        </div>
    )
}

export default HeaderRow;