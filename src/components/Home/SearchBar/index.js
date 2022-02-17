import React from "react";
import "./search.scss";
const SearchBar = ({ query, setQuery }) => {
    return <div className="search__container"><input type='text' className="search__input" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} /></div>
}
export default SearchBar;