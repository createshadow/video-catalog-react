import React from 'react';
import Input from "@material-ui/core/Input/Input";

const Search = () => {
    return (
        <div className='Search-container'>
            <Input type='text' placeholder='Find movie'/>
        </div>
    )
};

export default Search;