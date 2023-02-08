import React, {useState, useEffect} from 'react'
import './About.css'

function About() {
    const [readMore, setReadMore] = useState(true)
    let Alltext = 'Many great investors believe virgin lands with natural resources are rare and unique. After travelling throughout Uruguay for many years, I can say this country has such places, and the time to invest is now. <br></br> To fully value the assets of these estates, one must think about the biodiversity of the ecosystem itself, waterfalls, natural springs or virgin beaches. All of these in a mild and friendly weather.I strongly believe the global climate change awareness together with the bad use of the land will make us value and recognize these lands for what they really are, unique. <br></br> These lands have been highly profitable due to the evolution of the prices. The average investment time in them to confirm the price raise is 5 years.This period of time, together with its very low maintenance and tax fees, make of this a stable and safe investment that allows to benefit from the price raise not only for being unique, but also for their proximity to important touristic destinations. <br></br> This is what I call Land Banking, one of the safest and most tangible investments in this era of world ecological, economic, political and social instability. <br></br> Let me share my discoveries with you. <br></br> Rodney Stuart Milne'
    let SliceText = 'Many great investors believe virgin lands with natural resources are rare and unique. After travelling throughout Uruguay for many years, I can say this country has such places, and the time to invest is now. <br></br> To fully value the assets of these estates, one must think about the biodiversity of the ecosystem itself, waterfalls, natural springs or virgin beaches. All of these in a mild and friendly weather.I strongly believe the global climate change awareness together with the bad use of the land will make us value and recognize these lands for what they really are, unique. <br></br>'

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
            <h2>APPRECIATING LAND’S CONCEPT TAKES PASSION AND UNDERSTANDING</h2>
            <h3>---------------------------------------</h3>
            <div className="about-text-container">
                <p className="read-more"> Many great investors believe virgin lands with natural resources are rare and unique. After travelling throughout Uruguay for many years, I can say this country has such places, and the time to invest is now. <br></br> To fully value the assets of these estates, one must think about the biodiversity of the ecosystem itself, waterfalls, natural springs or virgin beaches. All of these in a mild and friendly weather.I strongly believe the global climate change awareness together with the bad use of the land will make us value and recognize these lands for what they really are, unique.</p> 
                <a onClick={toggleReadMore}> {readMore ? 'Read more...' : 'Show less...'} </a>
            </div>
        </div>
    )
}

export default About
