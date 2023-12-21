import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import Menu from '../Home/Menu'
import Contact from '../Contact/Contact'
import Slideshow from './Slideshow'
import Slideshowb from './Slideshow-b'
import Related from './Related'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Detail.css'

function Detail() {
    const [property, setProperty] = useState({})
    const [feature, setFeature] = useState([])
    const [category, setCategory] = useState(0)
    const [properties, setProperties] = useState([])
    const [related, setRelated] = useState([])
    const params = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_ENDPOINT}fetch_detail`, params)
                setFeature(response.data.features)
                setProperty(response.data.data)
                setCategory(response.data.data.category_id)
            } catch (error) {
                console.log(error)
            }
        }
        const fetchRelated = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_ENDPOINT}fetch_related`, { cat: category })
                console.log(category)

                setProperties(response.data)
                setRelated(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        if (Object.keys(property).length === 0) {
            fetchRelated()
        }

        fetchData()


    }, [])
    return (
        <div>

            <Menu />
            <div className="img-name-container">
                <div className="img-container">
                    <img src={property.portrait} alt="detail"></img>
                </div>
            </div>
            <Navbar />
            <div className="detail-container">
                <div className="description-container">
                    <h2>{property.name}</h2>
                    <p>{property.description}</p>
                </div>
                <div className="stats-container">
                    {
                        feature.map((f) => {
                            return (
                                <div className="stat" key={f.id}>
                                    <h4>{f.feature.name}</h4>
                                    <h3>{f.value}</h3>
                                </div>
                            )
                        })
                    }
                    <div className="stat">
                        <h4>Precio</h4>
                        <h3>{(property.price == 0) ? <u><a href={'mailto:rfsm@landlatinamerica.com?subject=Consulta Precio de la Propiedad: ' + property.name}>Preguntar</a></u> : property.price}</h3>
                    </div>
                    <div className="stat">
                        <h4>Pais</h4>
                        <h3>{property.country}</h3>
                    </div>
                </div>
            </div>
            <div className="buyers-container">
                <a href={'mailto:rfsm@landlatinamerica.com?subject=Consulta Propiedad: ' + property.name}><button>Buyers Agent</button></a>
            </div>

            <div className="slideshow-container">
                <Slideshowb />
                {/* <Slideshow />  */}

            </div>
            {property.video &&
                <div className="video-container">
                    <iframe width="700" height="465" src={property.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            }

            <div className="map-container">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="600" height="500" id="gmap_canvas" src={property.map_url} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
            <div className="related-main-container">
                <h2>Propiedades relacionadas</h2>
                <div className="related-container">
                    {
                        related.filter((e) => e.category_id == property.category_id).slice(0, 3).map((property) => {
                            return (
                                <div className="related-item" key={property.id}>
                                    <a href={'/detail/' + property.id}>
                                        <img src={property.images[0].url}></img>
                                        <h3>{property.name}</h3>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Contact />
        </div>
    )
}

export default Detail

