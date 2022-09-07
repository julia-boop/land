import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div>
            <div className="contact-form-container">
                <div className="contact-container">
                    <h1>Hablemos de LAND</h1>
                    <div className="contact-img-container">
                        <img src="/logo/logo-1.png" alt="logo"></img>
                    </div>
                    <h4>Rodney Stuart Milne</h4>
                    <div className="phone-container"> 
                        <h5>UY: +598 95047870</h5>
                        <h5>ARG: +54911 41735410</h5>
                    </div>
                </div>
                <div className="form-main-container">
                    <h1>Contacto</h1>
                    <div className="form-container">
                        <form>
                            <input type="text" placeholder="Nombre..."></input>
                            <input type="text" placeholder="Apellido"></input>
                            <input type="email" placeholder="Email..."></input>
                            <textarea type="text" placeholder="Mensaje..." rows="7"></textarea>
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="media-container">
                <div className="media-logo-container">
                    <img src="/logo/logo-2.png"></img>
                </div>
                <div className="media-img-container">
                    <img src="/icon/youtube.svg"></img>
                    <img src="/icon/whatsapp.svg"></img>
                    <img src="/icon/instagram.svg"></img>
                </div>
            </div>
        </div>
    )
}

export default Contact
