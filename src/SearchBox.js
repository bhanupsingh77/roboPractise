import React from 'react';
import RobotsSearch from './RobotsSearch';



const SearchBox = () => {
    return (
        <div>
            <input type="search" placeholder="search robot here" onChange={(Event)=>{RobotsSearch(Event)}}/>
        </div>
    )
}

export default SearchBox;