import './SearchBar.css';
import {
    React
} from 'react';

export function SearchBar({handleChange}) {
//make sure input is lowercase
    return (
        <div id="search-bar-container"> 
            <input 
            id="search-bar" 
            type="text" 
            placeholder="Search Pokemon"
            onChange={handleChange}
            />
        </div>
    )
}

