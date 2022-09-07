import React from 'react'
import './Search.css'

function Search() {
    return (
        <div className="search-container">
            <div className="searchform-container">
                <form>
                    <input type="text" placeholder="Buscar propiedades..."/>
                </form>
            </div>
        </div>
    )
}

export default Search
