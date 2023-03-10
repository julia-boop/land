import React, {useEffect, useState} from 'react'
import NavbarB from './Navbar-b'
import Menu from '../Home/Menu'
import Filter from './Filter'
import Contact from '../Contact/Contact'
import './Browse.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Browse() {
    const [properties, setProperties] = useState([])
    const [filterProperties, setFilterProperties] = useState([])
    const [input, setInput] = useState()
    const [query, setQuery] = useState(() => {
        const q = new URLSearchParams(window.location.search);
        /* console.log(q.toString()); */
        return q.get("query") || "";
      });
    const params = useParams()

    const handleQueryValue = (q, p) => {
        let found = []

        if(q != undefined) {
            for(let i = 0 ; i < p.length ; i ++) {
                p[i].name.toLowerCase().includes(q.toLowerCase()) && found.push(p[i])
                p[i].keyword.toLowerCase().includes(q.toLowerCase()) && found.push(p[i])
                p[i].country.toLowerCase().includes(q.toLowerCase()) && found.push(p[i])
                p[i].description.toLowerCase().includes(q.toLowerCase()) && found.push(p[i]) 
                p[i].zone.toLowerCase().includes(q.toLowerCase()) && found.push(p[i])
            }
            found = new Set(found)
            found = Array.from(found)
        }
        return found
    }

    const handleInputQuery = (q) => {
        if( q != undefined) {
            let input = document.querySelector('.input-search')
            input.value = q
            setInput(q)
        }
    }

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_ENDPOINT}fetch_categories`, params)
        .then((res) => {
            console.log(res.data.data)
            setFilterProperties(handleQueryValue(query, res.data.data), setProperties(res.data.data))  
            if(!res.data.data){
                setProperties(res.data.msg)
            }
            handleInputQuery(query)
        })
    }, [])


      const handleKeyChange = (event) => {
        let input = document.querySelector('.input-search')
        if(event.code == "Enter"){
            setInput(input.value)
            let found = []
            for(let i = 0 ; i < properties.length ; i ++) {
                properties[i].name.toLowerCase().includes(input.value.toLowerCase()) && found.push(properties[i])
                properties[i].keyword.toLowerCase().includes(input.value.toLowerCase()) && found.push(properties[i])
                properties[i].country.toLowerCase().includes(input.value.toLowerCase()) && found.push(properties[i])
                properties[i].description.toLowerCase().includes(input.value.toLowerCase()) && found.push(properties[i]) 
                properties[i].zone.toLowerCase().includes(input.value.toLowerCase()) && found.push(properties[i])
            }
        found = new Set(found)
        found = Array.from(found)
        found.length > 0 && setFilterProperties(found)
        } else if (input.value == ''){
            setInput(null)
        }
    }
    
    return (
        <div className="browse-container">
            <NavbarB/>
            <Menu/>
            <Filter onChange={(event) => handleKeyChange(event)} inputValue={input}/>
            <div className="items-container">
                {filterProperties.length > 0 ? (
                    filterProperties.map((property) => {
                        return (                            
                            <div key={property.id} className="item-container">
                                <a href={"/detail/"+property.id}>
                                <img src={property.portrait_url} alt=""></img>
                                <h3>{property.name}</h3>
                                </a>
                            </div>
                        )
                    })
                ) : (
                    Array.isArray(properties) && properties.length > 1 ? (
                        properties.map((property) => {
                            return (
                            <div key={property.id} className="item-container">
                                <a href={"/detail/"+property.id}>
                                <img src={property.images[0].url} alt=""></img>
                                <h3>{property.name}</h3>
                                </a>
                            </div>
                        )
                    })
                    ) : (
                        properties.length == 0 &&
                        <h2>No hay resultados para su busqueda</h2>
                    )
                )   
                }
            </div>
            <Contact/>
        </div>
    )
}

export default Browse
