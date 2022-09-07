import React from 'react'

import './Slider.css'

function Slider() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="/img/slide0.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <p>Casa 1</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/img/slide1.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <p>Casa 2</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/img/slide2.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <p>Casa 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
