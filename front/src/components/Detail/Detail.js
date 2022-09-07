import React from 'react'
import Navbarb from '../Browse/Navbar-b'
import Menu from '../Home/Menu'
import Contact from '../Contact/Contact'
import Slideshow from './Slideshow'

import './Detail.css'

function Detail() {
    return (
        <div>
            <Navbarb/>
            <Menu/>
            <div className="img-name-container">
                <div className="img-container">
                    <img src="/img/slide1.jpg"></img>
                </div>            
            </div>
            <div className="detail-container">
                <div className="description-container">
                    <h2>Casa 01</h2>
                    <p>Spectacular house within the “Club del Mar” of José Ignacio, very well built with fine finishes of first level, excellent view of the sea, very well placed and fully equipped. On the top floor enjoying the best view, with very good spaces and large windows we find a living room, playroom, kitchen and 1 suite. Terrace with barbecue with large wooden deck. On the ground floor we have 1 suite, 2 semi-suite, laundry room, two-car garage and a large utility room with bathroom. We are also outside on the ground floor with a large bedroom suite and another living room that can be used for guests.</p>
                </div>
                <div className="stats-container">
                    <div className="stat">
                        <h4>Superficie</h4>
                        <h3>1350 m2</h3>
                    </div>
                    <div className="stat">
                        <h4>Superficie Construida</h4>
                        <h3>550 m2</h3>
                    </div>
                    <div className="stat">
                        <h4>Ubicacion</h4>
                        <h3>Jose Ignacio</h3>
                    </div>
                    <div className="stat">
                        <h4>Pais</h4>
                        <h3>Uruguay</h3>
                    </div>
                    <div className="stat">
                        <h4>Precio</h4>
                        <h3><u>Preguntar</u></h3>
                    </div>
                </div>
            </div>
            <div className="buyers-container">
                <button>Buyers Agent</button>
            </div>
            <div className="slideshow-container">
                <Slideshow/>
            </div>
            <div className="map-container">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=jose%20ignacio&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
            <div className="video-container">
                <iframe width="700" height="465" src="https://www.youtube.com/embed/hUx3W1MNRDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="related-main-container">
                <h2>Propiedades relacionadas</h2>
                <div className="related-container">
                    <div className="related-item">
                        <img src="/img/slide0.jpg"></img>
                        <h3>Casa 01</h3>
                    </div>
                    <div className="related-item">
                        <img src="/img/slide1.jpg"></img>
                        <h3>Casa 02</h3>
                    </div>
                    <div className="related-item">
                        <img src="/img/slide2.jpg"></img>
                        <h3>Casa 03</h3>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
}

export default Detail
