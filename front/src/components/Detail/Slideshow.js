import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Slideshow() {
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)
    const params = useParams()

    const checkNumber = (number) => {
        if (number > images.length - 1) {
          return 0;
        }
        if (number < 0) {
          return images.length - 1;
        }
        return number;
      };
    const nextPerson = () => {
    setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
    });
    };
    const prevPerson = () => {
    setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
    });
    console.log(index)
    };
    useEffect(  () => {
        const url = `${process.env.REACT_APP_ENDPOINT}fetch_detail`
        const fetchData = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_ENDPOINT}fetch_detail`, params)
                setImages(response.data.images)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    console.log(images)
    return (
        <div>
                
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                {
                    images.map((im, i) => {
                        return (
                            <button key={im.id} className={index == i ? 'active' : ''} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
                        )
                    })
                }
            </div>
            <div className="carousel-inner">
            {
                   images.map((im, i) => {
                       return( 
                        <div className={(i == index ? "carousel-item active" : "carousel-item")} key={im.id}>
                            <img src={im.url} className="d-block w-100" alt="..."/>
                        </div>
                       )
                   })
               }
          
           
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" onClick={prevPerson}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" onClick={nextPerson}></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}

export default Slideshow
