
import React from "react";

const SearchBox = ({  searchField, searchChange }) => {
    return (

        <div className="pas2">
            <input className="pas3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robots" 
            onChange={ searchChange }
            />
        </div>
    )
}

export default SearchBox