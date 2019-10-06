import React from 'react';
// import SearchBox from './SearchBox';

const NotFound = () => {
    return (
        <div className="container-2 not-found">
            <a href="/" className="btn btn-light hide-sm">I miss home</a>
            <div className="not-found-title">
                <p className="x-large">Where am I?</p>
                <p className="lead text-grey">Sorry, this page doesn't exist. Ask your favourite pokemon to guide you home.</p>
            </div>
            <img src="https://pokeres.bastionbot.org/images/pokemon/54.png" alt="not-found" className="not-found-image" />
            {/* <div className="not-found-search">
                <SearchBox />
            </div> */}
        </div>
    )
};

export default NotFound;