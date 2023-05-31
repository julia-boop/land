import React, {useState, useEffect} from 'react'
import './About.css'

function About() {
    const [readMore, setReadMore] = useState(true)
    let Alltext = 'Luego de recorrer Uruguay  durante los últimos años, es el momento apropiado para crear un nuevo sitio de encuentro para los grandes inversores que creen que las tierras con recursos naturales y vírgenes, están pasando a ser bienes escasos y únicos. <br></br> Para valuar las bondades de estas propiedades, tome encuenta la biodiversidad del ecosistema. Fuentes de aguas permanentes, reservorio de aguas naturales o playas prácticamente virgenes con un clima templado, de temperaturas amigables. <br></br> Insisto que con la concientizacion global de los cambios climáticos y mal uso de las tierras, el ser humano va a empezar a valorar estas tierras como únicas,  un bien preciado que merece el mayor de los cuidados. <br></br> Los invito a compartir mis descubrimientos <br></br> Rodney Stuart Milne'
    let SliceText = 'Luego de recorrer Uruguay  durante los últimos años, es el momento apropiado para crear un nuevo sitio de encuentro para los grandes inversores que creen que las tierras con recursos naturales y vírgenes, están pasando a ser bienes escasos y únicos. <br></br> Para valuar las bondades de estas propiedades, tome encuenta la biodiversidad del ecosistema. Fuentes de aguas permanentes, reservorio de aguas naturales o playas prácticamente virgenes con un clima templado, de temperaturas amigables.'

    const toggleReadMore = () => {
        setReadMore(!readMore)
        console.log(readMore)
    }

    useEffect(() => {
        let p = document.querySelector('.read-more')
        if(readMore) {
            p.innerHTML = SliceText
        } else {
            p.innerHTML = Alltext
        }
    }, [toggleReadMore])

    return (
        <div className="about-container">
            <h2>DESCUBRIR LUGARES LAND LLEVA PASIÓN Y ENTENDIMIENTO</h2>
            <h3>---------------------------------------</h3>
            <div className="about-text-container">
                <p className="read-more"> Luego de recorrer Uruguay  durante los últimos años, es el momento apropiado para crear un nuevo sitio de encuentro para los grandes inversores que creen que las tierras con recursos naturales y vírgenes, están pasando a ser bienes escasos y únicos. <br></br> Para valuar las bondades de estas propiedades, tome encuenta la biodiversidad del ecosistema. Fuentes de aguas permanentes, reservorio de aguas naturales o playas prácticamente virgenes con un clima templado, de temperaturas amigables.</p> 
                <a onClick={toggleReadMore}> {readMore ? 'Leer más...' : 'Mostrar menos...'} </a>
            </div>
        </div>
    )
}

export default About
