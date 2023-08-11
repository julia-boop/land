import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Carousel} from 'react-bootstrap'

function Slideshowb() {
    const params = useParams()
    const [images, setImages] = useState([])

    useEffect(  () => {
        const url = 'http://localhost:3001/endpoints/fetch_detail'
        const fetchData = async () => {
            try {
                const response = await axios.post(url, params)
                console.log(response)
                setImages(response.data.images)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    console.log(images)
    return (
            <Carousel fade>
            {images.map((im) => {
                return (<Carousel.Item key={im.id}>
                    <img
                    className="d-block w-100"
                    src={im.url}
                    alt="First slide"
                    />
                </Carousel.Item> )
                
            })}
            </Carousel>
    )
}

export default Slideshowb
