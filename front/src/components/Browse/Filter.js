import React, {useEffect, useState} from 'react'
import './Filter.css'
import {useParams} from 'react-router-dom'

function Filter({onChange, inputValue}) {
    const [active, setActive] = useState()
    const params = useParams()

    const filterClass = () => {
        let btns = document.querySelectorAll('.filter-btn')
        for(let i = 0 ; i < btns.length ; i ++) {
            if(btns[i].id == params.cat_id){
                btns[i].classList.add('filter-active')
                btns[i].style.color = 'white'
            }
        }
    }

    const handleCrossClick = () => {
        let divQuery = document.querySelector('.search-result-container')
        let input = document.querySelector('.input-search')
        console.log(inputValue)
        divQuery.innerHTML = ''
        input.value = ''
    }

    useEffect(() => {
        filterClass()
    }, [])

    return (
        <div>
            <div className="filter-main-container">
                <div className="searchbar-container">
                    <div>
                        <img src="/icon/search.svg"></img>
                        <input type="text" placeholder="Buscar propiedades..." className="input-search" onKeyPress={(event) => onChange(event)}/>
                    </div>
                </div>
                <div className="filter-container">
                    <ul>
                        <li id="0" className='filter-btn'> <a href="/properties/0"> Todas </a></li>
                        <li id="4" className='filter-btn'> <a href="/properties/4">Alquileres</a></li>
                        <li id="3" className='filter-btn'> <a href="/properties/3">Propiedades</a></li>
                        <li id="1" className='filter-btn'> <a href="/properties/1">Campos y Chacras </a></li>
                        <li id="2" className='filter-btn'> <a href="/properties/2">Desarrollos y Comunidades </a></li>
                    </ul>
                </div>
            </div>
            {inputValue &&
                <div className="search-result-container">
                    <h5>{inputValue}</h5>
                    <img src="/icon/cross.svg" onClick={() => handleCrossClick()}></img>
                </div>
            }
            
        </div>
    )
}

export default Filter
