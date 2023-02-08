import React, {useState} from 'react'
import './Search.css'

function Search() {
    const [inputValue, setInputValue] = useState()
    const handleRef = (event) => {
        let input = document.querySelector('.home-search-input')
        if(event.code == "Enter"){
            setInputValue(input.value)
            window.location = "http://localhost:3000/properties/0/?query="+input.value
        }
    }
    return (
        <div className="search-container">
            <div className="searchform-container">
                <input type="text" placeholder="Buscar propiedades..." className="home-search-input" onKeyPress={(event) => handleRef(event)}/>
            </div>
        </div>
    )
}

export default Search
