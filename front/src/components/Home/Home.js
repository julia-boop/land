import React from 'react'
import Slider from './Slider/Slider'
import Navbar from './Navbar'
import Menu from './Menu'
import Search from './Search'

function Home() {
    return (
        <div>
            <Menu/>
            <Slider/>
            <Navbar/>
            <Search/>
        </div>
    )
}

export default Home
