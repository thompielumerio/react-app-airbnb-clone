import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Items from './Components/Items'
import {useEffect} from 'react'


function App() {
  return (
    <div className="App">
       <div className="main">
       <Navbar />
      <Hero />
      <Items />
      </div>
    </div>
  )
}

export default App
