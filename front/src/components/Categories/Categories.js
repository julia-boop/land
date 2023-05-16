import React from 'react'
import './Categories.css'

function Categories() {
    return (
        <div>
            <div className="farm-container">
                <div className="img-title-container">
                    <div className="farm-title-container">
                        <h1>Campos & Chacras</h1>
                    </div>
                    <div className="farm-img-container">
                        <img src="/img/farms.jpg" alt="farms"></img>
                    </div>
                </div>
                <div className="farm-btn-container">
                    <a href="/properties/1">Ver Propiedades</a>
                </div>
            </div>
            <div className="development-container">
                <div className="development-img-container">
                    <img src="/img/development.jpg" alt="developments"></img>
                </div>
                <div className="development-title-container">
                    <h1>Desarrollos & Comunidades</h1>
                </div>
                <div className="development-btn-container">
                    <a href="/properties/2">Ver Propiedades</a>
                </div>
            </div>
            <div className="property-container">
                <div className="property-img-container">
                    <img src="/img/property.jpg" alt="properties"></img>
                </div>
                <div className="property-title-container">
                    <h1>Propiedades</h1>
                </div>
                <div className="property-btn-container">
                    <a href="/properties/3">Ver Propiedades</a>
                </div>
            </div>
            <div className="rental-container">
                <div className="rental-img-container">
                    <img src="/img/rental.jpg" alt="rentals"></img>
                </div>
                <div className="rental-title-container">
                    <h1>Alquileres</h1>
                </div>
                <div className="rental-btn-container">
                    <a href="/properties/4">Ver Propiedades</a>
                </div>
            </div>
            <div className="buyers-agent-container">
                <h2>Buyers Agent</h2>
                <h3>-----------------</h3>
                <div className="buyers-agent-text-container">
                    <p>Nuestro servicio proporciona una representación de primer orden a lo largo de todo el proceso de adquisición: desde la búsqueda de propiedades y la diligencia debida hasta las visitas, la negociación y la transmisión, con habilidades de negociación que actúan de su lado. Desarrollamos una verdadera comprensión de sus objetivos e identificamos las mejores propiedades objetivo, siempre mantendremos su identidad y toda la información obtenida de usted privada y confidencial, y fuera de los titulares.</p>
                    <p>Nuestro compromiso con usted no termina cuando recibe las llaves. Recibirá servicios gratuitos de asesoramiento y consultoría de por vida.</p>
                </div>
            </div>
        </div>
    )
}

export default Categories
