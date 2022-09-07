import React from 'react'
import './Filter.css'

function Filter() {
    return (
        <div>
            <div className="filter-main-container">
                <div className="searchbar-container">
                    <div>
                        <img src="/icon/search.svg"></img>
                        <input type="text" placeholder="Buscar propiedades..."/>
                    </div>
                </div>
                <div className="filter-container">
                    <ul>
                        <li>Todas</li>
                        <li>Propiedades</li>
                        <li>Alquileres</li>
                        <li>Campos y Chacras</li>
                        <li>Desarrollos y Comunidades</li>
                    </ul>
                </div>
            </div>
            <div className="search-result-container">
                    <h5>Casas en el mar</h5>
                    <img src="/icon/cross.svg"></img>
                </div>
        </div>
    )
}

export default Filter
