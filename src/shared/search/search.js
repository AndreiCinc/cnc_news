import React from "react";
import SearchStyle from "./search.module.scss";


const Search = () => (
    <button className={SearchStyle.searchButton}>
        <img id="search-picture" src="lupa.png" alt="#" className={SearchStyle.searchImg}/>
    </button>
)

export default Search;