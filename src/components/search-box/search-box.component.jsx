import { Component } from "react";
import  './search-box.styles.css';

const SearchBox = (monster) => { // on peut mettre en parametre directement className, placeholder et handler

    const {className, placeholder, handler} = monster;

    return (
        <input
            className = {`search-box ${className}`}
            type = 'search'
            placeholder = {placeholder}
            onChange = {handler} 
        />
    )
}


export default SearchBox;