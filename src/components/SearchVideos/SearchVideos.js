import React from 'react';
import './SearchVideos.scss';
import TuneIcon from '@material-ui/icons/TuneSharp';
function SearchVideos() {
    return (
        <div className="searchVideos">
            <div className="searchVideos__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
        </div>
    )
};

export default SearchVideos;
