import React, {useRef} from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


function Contact() {

    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_fttkcfr', 'template_w8sbcte', e.target, 'xGsviFBj3-Sr9gQko')
        .then((result) => {
            let succesmsg = document.querySelector('.success-msg')
            let formsent = document.querySelector('form')
            succesmsg.innerHTML = '<p>El mensaje ha sido enviado con éxito</p>'
            console.log(e.target.elements);
            formsent.reset()
            
        }, (error) => {
            console.log(error.text);
        }).then(() => {
            setTimeout(() => {
                let succesmsgsent = document.querySelector('.success-msg')
                succesmsgsent.innerHTML = ''
            }, 3000)
        })
    };

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
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="success-msg"></div>
                            <input type="text" placeholder="Nombre..." name="user_name"></input>
                            <input type="text" placeholder="Apellido" name="user_surname"></input>
                            <input type="email" placeholder="Email..." name="user_email"></input>
                            <textarea type="text" placeholder="Mensaje..." rows="7" name="message"></textarea>
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
