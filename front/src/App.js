import Home from './components/Home/Home';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import './App.css';
import {useState} from 'react'


function App() {

  return (
    <div className="App">
      <Home/>
      <About/>
      <Categories/>
      <Contact/>
    </div>
  );
}

export default App;
