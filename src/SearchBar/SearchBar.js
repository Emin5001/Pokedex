import './SearchBar.css';
import {
    React
} from 'react';

export function SearchBar({handleChange}) {
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

