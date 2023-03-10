import React, {useEffect, useState} from 'react'

import './Slider.css'
import axios from 'axios'

function Slider() {
    const [images, setImages] = useState([])
    const [active, setActive] = useState(false)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ENDPOINT}fetch_home`)
        .then((res) => {
            setImages(res.data)
        })
    }, [])
    console.log(images)

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            {
                    images.map((image, i) => {
                        return (
                            <div key={image.id} className={(i == 0)? 'carousel-item active' : 'carousel-item'} data-bs-interval="5000">
                                <img src={image.images[0].url} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-md-block">
                                    <a href={'/detail/'+image.id}><p>{image.name}</p></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider
