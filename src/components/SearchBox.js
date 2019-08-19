import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <input type="search" placeholder="search robot here" onChange={props.searchFunction}/>
        </div>
    )
}

export default SearchBox;